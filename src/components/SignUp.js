import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../components/SignUp.css'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary';
import LanguageIcon from '@mui/icons-material/Language';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function SignUp() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const signUp = (e)=>{
        e.preventDefault()
        if (!Fname) {
          return alert("Please Enter First Name")
        }
        if (!Lname) {
          return alert("Please Enter Last Name")
        }
        auth.createUserWithEmailAndPassword(email, password ).then((userAuth)=>{
           userAuth.user.updateProfile({
            displayName : Fname,
           }).then(()=>{
            dispatch(login({
              email : userAuth.user.email,
              uid : userAuth.user.uid,
              displayName : Fname
            }))
            navigate('/account')
           })
            }
            ).catch((error)=>alert(error.message))
    }

  return (
    <div className='signup'>
      <div className='signup-header'>
            <div className='logo'>
                <Link to="/">
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="Tesla logo" />
                </Link>
            </div>
            <div className='header-language'>
                <LanguageIcon /> <span>en-US</span>
            </div>
        </div>
        <div className='signup-info'>
            <h1>Create Account</h1>
            <form className='signup-form'>
                <label htmlFor="name">First Name</label>
                <input type="text" id='fname' value={Fname} onChange={(e)=> setFname(e.target.value)} />
                <label htmlFor="name">Last Name</label>
                <input type="text" id='lname' value={Lname} onChange={(e)=> setLname(e.target.value)} />
                <label htmlFor="email">Email Address</label>
                <input type="email" id='email' value={email} onChange={(e)=> setemail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={password} onChange={(e)=> setpassword(e.target.value)} />
                <ButtonPrimary name='Create Account' type='submit' onClick={signUp} />
            </form>
            <div className='signup-divider'>
                <hr/><span>OR</span><hr/>
            </div>
            <Link to='/login'>
            <ButtonSecondary name="Sign In"/>
            </Link>
        </div>
    </div>
  )
}

export default SignUp