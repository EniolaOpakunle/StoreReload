import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/image 10.png'

export default function ForgotPasswordResponse() {
  return (
    <section>
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid d-flex navbar2-div">
                <Link className='d-flex logo-div navbar-brand'>
                    <img src={logo} className='logo-image'/>
                    <p className='logo text-dark'>StoreReload</p>
                </Link>
                </div>
            </nav>
        </header>
        <div className='m-auto w-50 mt-5'>
            <h3 className='text-center mb-5 sign-up title'>Reset Password</h3>
            <div className='text-center'>
                A password reset email has been sent to your email address @******@gmail.com. Click on the link sent to reset your password
            </div>
            <button type='submit' className='btn form-control mt-5 nav-btn' >Go to email</button>
        </div>
        
    </section>
  )
}
