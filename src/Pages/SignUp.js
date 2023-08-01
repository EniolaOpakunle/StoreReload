import React from 'react'
import Navbar2 from '../components/Navbar2'
import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


export default function () {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
  return (
    <section className='signup-main'>
        <Navbar2/>
        <div className='w-50 signup-div1'>
            <h3 className='text-center signup-title'>Dashboard Sign up</h3>
            <form className='form-group mt-4'>
                <label className='mb-2'>Enter your email address</label >
                <input 
                className='form-control signup-input'
                
                />
            </form>
            <form className='form-group mt-4'>
                <label className='mb-2'>Enter your password <span className='text-end'>Minimum of 8 characters</span></label>
                <input className='form-control signup-input'/>
            </form>
            <button type='submit' className='btn form-control btn-primary mt-5 nav-btn' >Sign up</button>
            <div>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />;
            </div>

        </div>
    </section>
  )
}
