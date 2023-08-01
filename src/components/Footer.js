import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/image 10.png'
import location from '../Images/Frame.png'
import phone from '../Images/Frame1.png'
import facebook from '../Images/iconoir_facebook.png'
import instagram from '../Images/ph_instagram-logo.png'
import twitter from '../Images/uit_twitter-alt.png'

export default function Footer() {
  return (
    <section className='footer-container'>
        <div className='container m-auto'>
            <div className='d-flex footer-div2'>
                <div className=''>
                    <div className='d-flex'>
                        <img src= {logo} className='logo-img'/>
                        <p className='logo mx-3'>StoreReload</p>
                    </div>
                    <div className='d-flex my-3'>
                        <img src={location} className='media-image'/>
                        <p className='mx-3'>No.4 Apebi Street, Isolo Lagos State</p>
                    </div>
                    <div className='d-flex'>
                        <img src={phone} className='media-image'/>
                        <p className='mx-3'>+234 703 911 3678</p>
                    </div>
                    <div className='d-flex my-5'>
                        <div className='media-div'>
                            <img src={facebook} className='media-image'/>
                        </div>
                        <div className='media-div mx-4'>
                            <img src={instagram} className='media-image'/>
                        </div>
                        <div className='media-div '>
                            <img src={twitter} className='media-image'/>
                        </div>
                    </div>
                </div>
                <div className='nav footer-nav'>
                    <div>
                        <Link className='nav-link footer-navLink'>Home</Link>
                    </div>
                    <div>
                        <Link className='nav-link footer-navLink my-3'>Who we are</Link>
                    </div>
                    <div>
                        <Link className='nav-link footer-navLink my-3'>What we sell</Link>
                    </div>
                    <div>
                        <Link className='nav-link footer-navLink my-3'>Contact us</Link>
                    </div>
                    <div>
                        <Link className='nav-link footer-navLink my-3'>Faqs</Link>
                    </div>
                </div>
                    <div>
                        <Link className='nav-link footer-navLink' to='/termsofservice'>Terms of service</Link>
                    </div>
                    <div>
                        <Link className='nav-link footer-navLink' to= '/privacypolicy'>Privacy Policy</Link>
                    </div>
            </div>
            <div className='text-light copyright'> 
                <span>C</span> 2023 StoreReload
            </div>
        </div>
    </section>
  )
}
