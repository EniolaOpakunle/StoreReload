import React from 'react'
import frame19 from '../Images/Frame 19.png'
import frame20 from '../Images/Frame 20.png'
import frame21 from '../Images/Frame 21.png'

export default function WhoWeAre() {
  return (
    <section className='who-container'>
        <div className='container'>
            <p className='who-name text-center'>WHO WE ARE</p>
            <div className='row who-card-div'>
                <div className='align-items-center card col-lg-4'>
                    <img className='who-image' src={frame19}/>
                    <p className='who-title card-title'>Committed</p>
                    <p className='who-description text-center'>Our customers' growth and profit maximization are our top priorities.</p>
                </div>
                <div className='align-items-center card col-lg-4'>
                    <img className='who-image' src={frame20}/>
                    <p className='who-title card-title'>Efficient</p>
                    <p className='who-description text-center'>Our global marketplace ensures that our customers always have goods to stock up in their shops.
                    </p>
                </div>
                <div className='align-items-center card col-lg-4'>
                    <img className='who-image' src={frame21}/>
                    <p className='who-title card-title'>Reliable</p>
                    <p className='who-description text-center'>You can count on us to deliver beyond your expectations.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
 