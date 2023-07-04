import React from 'react'
import googleplay from '../Images/Frame 5.png'
import appstore from '../Images/Frame 8.png'
import phoneImage1 from '../Images/Group 58.png'
import phoneImage2 from '../Images/Group 59.png'

export default function Download() {
  return (
    <section className='download-container w-100'>
        <div className='download-div1 d-flex'>
            <div className='w-50 download-div2'>
                <p className='download-maintext text-left'>Download App</p>
                <p className='main-text2 text-left'>Join millions of businesses to utilize your services to better the state of your business. With us you do not have to worry about your business, we have everything covered for you. </p>
                <a href=''><img src={googleplay}/></a>
                <a href='' className='mx-5'><img src={appstore}/></a>
            </div>
            <div className='w-50'>
                <img src={phoneImage2} className='phoneimage1'/>
                <img src={phoneImage1} className='phoneimage2'/>
            </div>
        </div>
    </section>
  )
}
