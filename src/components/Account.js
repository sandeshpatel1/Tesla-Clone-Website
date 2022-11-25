import React from 'react'
import "../components/Account.css"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import Car from './Car';
import { auth } from '../firebase';

function Account({ IsMenuOpen, setIsMenuOpen }) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
        const logoutOfApp = ()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
            navigate('/')
        }).catch((error)=>{
            alert(error.message);
        })
    }

  return (
    <>
    <div className='account'>
        <div className='account-header'>
           <div className='account-logo'>
            <Link to="/">
                <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="logo" />
            </Link>
            </div>
            <div className='account-links'>
                <Link to='/account'>Model S</Link>
                <Link to='/account'>Model 3</Link>
                <Link to='/account'>Model X</Link>
                <Link to='/account'>Model Y</Link>
                <Link to='/account'>Solar Roof</Link>
                <Link to='/account'>Solar Panels</Link>
                <Link to='/account'>Shop</Link>
                <Link to='/account'>Tesla Account</Link>
                <Link onClick={logoutOfApp}>Log out</Link>
            <div className='account-menu' onClick={() => setIsMenuOpen(!IsMenuOpen)}>
                { IsMenuOpen ? <CloseIcon className='account-closemenu' /> :  <MenuIcon/> }
            </div> 
        </div>
    </div>
    <div className='account-info'>
        <div className='account-person'>
            <h4>{user?.displayName + "s"} Tesla</h4>
        </div>
        <div className='info-right'>
            <Link to='/'>Home</Link>
            <Link>Account</Link>
            <Link>History</Link>
            <Link onClick={logoutOfApp}>Sign Out</Link>
        </div>
    </div>
    <div className='account-car'>
        <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815'
                model='Model S'
                testDrive />
        <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815' 
                model='Model X' /> 
    </div>
</div>
</>   
 )
}
export default Account