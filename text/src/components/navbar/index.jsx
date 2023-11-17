import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar_up'>
    <div className='line1'></div>
    <div className='line2'></div>
    
    </div>
    <div className='navbar_middle'>
        <p>COPPLE</p>
    </div>
    <div className='navbar_down'>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-vimeo-v"></i>
    <i class="fa-brands fa-twitter"></i>
    </div>
    </div>
  )
}

export default Navbar