import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Images/image 10.png'

export default function ForgotPassword() {
    const navigate = useNavigate()
    const handleSubmit = () =>{
        navigate('/response')
    }
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
            <h3 className='text-center signup-title'>Forgot Password?</h3>
            <form className='form-group mt-4' onSubmit={handleSubmit}>
                <label className='mb-2'>Enter your email address</label >
                <input className='form-control signup-input'/>
                <button type='submit' className='btn form-control mt-5 nav-btn'>Submit</button>
            </form>
        </div>
    </section>
  )
}
