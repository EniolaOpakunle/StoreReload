import React from 'react'
import image1 from '../Images/image 1.png'
import image2 from '../Images/image 2.png'
import image3 from '../Images/image 3.png'
import image4 from '../Images/image 4.png'
import image5 from '../Images/image 5.png'
import image6 from '../Images/image 6.png'
import image7 from '../Images/image 7.png'

export default function Display() {
  return (
    <section className='display-container'>
        <div className='display-div d-flex'>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            <img src={image5}/>
            <img src={image6}/>
            <img src={image7}/>
        </div>
    </section>
  )
}
