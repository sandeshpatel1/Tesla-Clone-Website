import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import ButtonPrimary from './ButtonPrimary';
import "../components/Login.css";
import ButtonSecondary from './ButtonSecondary';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';



function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const SignIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth)=>{
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : userAuth.user.displayName
            })
            )
            Navigate('/account');
           }).catch((error)=>alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login-header'>
            <div className='logo'>
                <Link to="/">
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="Tesla logo" />
                </Link>
            </div>
            <div className='header-language'>
                <LanguageIcon/> <span>en-US</span>
            </div>
        </div>
        <div className='login-info'>
            <h1>Sign In</h1>
            <form className='login-form'>
                <label htmlFor="email">Email Address</label>
                <input type="email" id='email' value={email} onChange={(e)=> setemail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={password} onChange={(e)=> setpassword(e.target.value)} />
                <ButtonPrimary name='Sign In' type='submit' onClick={SignIn} />
            </form>
            <div className='login-divider'>
                <hr/><span>OR</span><hr/>
            </div>
            <Link to='/signup'>
            <ButtonSecondary name="create account"/>
            </Link>
        </div>
    </div>
  )
}

export default Login