import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Header.css"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';



function Header({ IsMenuOpen, setIsMenuOpen }) {
  
  return (

    <div className='header'>
      <div className='header-logo'>
        <Link to="/">
          <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="TESLA" />
        </Link>
      </div>
      <div className='header-links'>
        <Link to="/"> Model S </Link>
        <Link to="/"> Model 3 </Link>
        <Link to="/"> Model X </Link>
        <Link to="/"> Model Y </Link>
        <Link to="/"> Solar Roof </Link>
        <Link to="/"> Solar Panel </Link>
      </div>
      <div className='header-right'>
      <Link to="/" className={IsMenuOpen ? "header-link-hidden" : ""}> Shop</Link>
      <Link to="/login" className={IsMenuOpen ? "header-link-hidden" : ""}> Account</Link>
      <div className='header-menu' onClick={() => setIsMenuOpen(!IsMenuOpen)}>
        {IsMenuOpen ? <CloseIcon /> : <MenuIcon />}
       </div>
      </div>
  </div>
    )
  }

export default Header