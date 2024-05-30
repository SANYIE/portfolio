import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Captain Prince</h1>

      <div className='navItems'>

        <ul className='navList'>
          <li className='Active'>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Clients</li>
        </ul>
      </div>
      <div className='contacts'>
        <button>Contact me</button>
      </div>
      

    </div>
  )
}

export default Navbar