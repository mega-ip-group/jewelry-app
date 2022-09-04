import React from 'react'
import logo from "../../../images/logo.png"
import HeaderList from './HeaderList/HeaderList'
import "./Header.css"
function Header() {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt='' />
        <HeaderList/>

    
    </div>
  )
}

export default Header
