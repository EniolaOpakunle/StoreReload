import React from 'react'
import Navbar2 from '../components/Navbar2'
import { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


export default function () {
    const navigate = useNavigate()
    const [allCustomers, setallCustomers] = useState([])
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [error, seterror] = useState('')

    useEffect(() => {
      if (localStorage.allCustomers){
        setallCustomers(JSON.parse(localStorage.allCustomers))
      }
      else{
        setallCustomers([])
      }
    }, [])
    

    const handleSubmit = (value) =>{
        console.log(value)
        let found = allCustomers.find(val => val.email == value.email)
        if (found){
            seterror('Email already exists')
        }
        else{
            let newAllCustomers = [...allCustomers, value]
            localStorage.allCustomers = JSON.stringify(newAllCustomers)
            setallCustomers([...allCustomers, value])
            console.log(allCustomers)
            navigate('/dashboard')
        }
    }
  return (
    <section className='signup-main'>
        <Navbar2/>
        <div className='w-50 signup-div1'>
            <h3 className='text-center signup-title'>Dashboard Sign up</h3>
            <form onSubmit={() => handleSubmit({name, email, password})}>
                <div className='form-group mt-4'>
                    <label className='form-label mb-2'>Username</label>
                    <input
                    className='form-control signup-input'
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                    />
                </div>
                <div className='form-group mt-4'>
                    <label className='mb-2'>Enter your email address</label >
                    <input 
                    className='form-control signup-input'
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className='form-group mt-4'>
                    <label className='mb-2'>Enter your password <span className='text-end'>Minimum of 8 characters</span></label>
                    <input 
                    className='form-control signup-input'
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    />
                </div>
                <button type='submit' className='btn form-control btn-primary mt-5 nav-btn' >Sign up</button>
            </form>
            
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
            <div className='text-danger'>{error}</div>

        </div>
    </section>
  )
}
