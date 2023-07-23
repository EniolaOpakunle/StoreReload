import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/image 10.png'

export default function ResetPassword() {
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
        <div className='w-50 signup-div1'>
            <h3 className='text-center signup-title'>Create new password</h3>
            <form className='form-group mt-4'>
                <label className='mb-2'>Enter your password <span className='text-end'>Minimum of 8 characters</span></label>
                <input className='form-control signup-input'/>
            </form>
            <button type='submit' className='btn form-control mt-5 nav-btn' >Sign up</button>
        </div>
    </section>
  )
}
