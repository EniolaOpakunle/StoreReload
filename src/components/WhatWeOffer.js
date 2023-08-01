import React from 'react'
import rectangle72 from '../Images/Rectangle 72.png'
import rectangle73 from '../Images/Rectangle 73.png'
import rectangle74 from '../Images/Rectangle 74.png'

export default function WhatWeOffer() {
  return (
    <section className='what-container w-100'>
        <div className='what-div1 container m-auto'>
            <p className='what-name text-center'>WHAT WE OFFER</p>
            <p className='what-subname text-center'>Our goal is to bring the traditional Marketplace to the digital space. With our services, our customers are one step ahead of their competitors.</p>
            <div className='row what-card-div'>
                <div className='card col-lg-4 col-md-8'>
                    <img className='what-image' src={rectangle72}/>
                    <p className='what-title card-title'>Bulk Restock</p>
                    <p className='what-description'>Restock your shop with products from companies of your choice at reasonable prices, in any quantity.</p>
                </div>
                <div className='card col-lg-4 '>
                    <img className='what-image' src={rectangle73}/>
                    <p className='what-title card-title'>Delivery</p>
                    <p className='what-description'>We deliver to our customer's doorstep and ensure that all goods are well packaged and carefully transported.</p>
                </div>
                <div className='card col-lg-4'>
                    <img className='what-image' src={rectangle74}/>
                    <p className='what-title card-title'>Access to Loan</p>
                    <p className='what-description'>We deliver to our customer's doorstep and ensure that all goods are well packaged and carefully transported.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
