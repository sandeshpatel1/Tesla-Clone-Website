import React, { useState , useEffect } from 'react'
import { Routes, Route, useNavigate, redirect,  } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HeaderBlock from './components/HeaderBlock'
import Menu from './components/Menu'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import SignUp from './components/SignUp'
import Account from './components/Account'
import { auth } from './firebase'

function App() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if (!userAuth) {
        // user is login
        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
        })
        )
      } else {
        // user is signed out
        dispatch(logout())
      }
    })
}, [dispatch])
  
  return (
    <div>
      <Routes>
        <Route path="/"
          element={
            <>
              <Header IsMenuOpen={IsMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              {IsMenuOpen && <Menu /> }
               <HeaderBlock />
            </>
          } />
        <Route path="/login" element={ <>
          { <Login/> } 
          </> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={ <>
        { <Account IsMenuOpen={IsMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
          {IsMenuOpen && <Menu /> } 
          </> 
          }/>
      </Routes>
    </div>
  )
}

export default App
