import React from 'react'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className='header'>
        <div className="logo"></div>
        <div className="nav-menu">
            <div>Home</div>
            <div>About</div>
            <div>Gallery</div>
            <div>Awards</div>
            <div>Contact Us</div>
        </div>
       
    </div>
  )
}

export default Header