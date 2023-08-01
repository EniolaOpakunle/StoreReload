import React from 'react'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/image 10.png'

export default function SignIn() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  return (
    <section>
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid d-flex navbar2-div">
                <Link className='d-flex logo-div navbar-brand'>
                    <img src={logo} className='logo-image'/>
                    <p className='logo text-dark'>StoreReload</p>
                </Link>
                <div className='d-flex'>
                    <p>Don't have an account?</p>
                    <Link to='/signup' className='nav-link'>Sign up</Link>
                </div>
                </div>
            </nav>
        </header>
        <div className='w-50 signup-div1'>
            <h3 className='text-center signup-title'>Dashboard Sign In</h3>
            <form className='form-group mt-4'>
                <label className='mb-2'>Enter your email address</label >
                <input 
                className='form-control signup-input'
                onChange={(e) => setemail(e.target.value)}
                />
            </form>
            <form className='form-group mt-4'>
                <label className='mb-2'>Enter your password <span className='text-end'>Minimum of 8 characters</span></label>
                <input 
                className='form-control signup-input'
                onChange={(e) => setpassword(e.target.value)}
                />
            </form>
            <div className='mt-3'><Link to='/forgotpassword'>Forgot Password?</Link></div>
            <button type='submit' className='btn form-control mt-5 nav-btn' >Sign In</button>
        </div>
    </section>
  )
}
