import React from 'react'

// because scss is just compiled into css, you just import the relevant css file to the react component file
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/profile'>Profile</a>
        <a href='/contact'>Contact</a>
      </div>
    </div>
  )
}
