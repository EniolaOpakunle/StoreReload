import React from 'react'
import image from '../Images/Frame 39.png'

export default function GoCashless() {
  return (
    <section className='go-container'>
        <div className='go-div1 d-flex'>
            <div className='w-50 go-div3'>
                <p className='text-left shop-title'>GO CASHLESS, TRANSACT VIA WALLETS </p>
                <p className='text-left main-text2'>Open a wallet with us and enjoy a good flow of transactions. You can also use this medium to save on goods you want to get in the future. This is geared towards staying ahead of your competitors while maximizing profit. </p>
                <button className='nav-btn go-btn'>Download for Free</button>
            </div>
            <div className='w-50 go-div2'>
                <img src={image}/>
            </div>
        </div>
    </section>
  )
}
