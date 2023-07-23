import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/image 10.png'
export default function Navbar() {
  return (
    
    <header className='w-100'>
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          {/* <a class="navbar-brand logo" href="#">StoreReload</a> */}
          <Link className='d-flex logo-div navbar-brand'>
                <img src={logo} className='logo-image'/>
                <p className='logo text-dark'>StoreReload</p>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link'>Who we are</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link'>What we sell</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link'>Contact us</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link'>Faqs</Link>
              </li>
            </ul>
          </div>
          <button class="btn nav-btn">Download App for free</button>
        </div>
      </nav>
    </header>
  )
}
