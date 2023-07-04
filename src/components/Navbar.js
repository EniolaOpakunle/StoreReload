import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
    <header className='w-100'>
        <nav className='w-80 nav-div1'>
          <div className='logo'>
            StoreReload
          </div>
          <div>
            <Link className='nav-link'>home</Link>
          </div>
          <div>
            <Link className='nav-link'>Who we are</Link>
          </div>
          <div>
            <Link className='nav-link'>What we sell</Link>
          </div>
          <div>
            <Link className='nav-link'>Contact us</Link>
          </div>
          <div>
            <Link className='nav-link'>Faqs</Link>
          </div>
          <button className='nav-btn'>
            Download App for Free
          </button>
        </nav>
    </header>
  )
}
