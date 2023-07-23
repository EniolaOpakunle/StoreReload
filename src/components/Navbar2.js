import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/image 10.png'

export default function Navbar2() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex navbar2-div">
            <Link className='d-flex logo-div navbar-brand'>
                <img src={logo} className='logo-image'/>
                <p className='logo text-dark'>StoreReload</p>
            </Link>
            <div className='d-flex'>
                <p>Have an account already?</p>
                <Link to='/signin' className='nav-link'>Sign in</Link>
            </div>
            </div>
        </nav>
    </header>
  )
}
