import React from 'react'
import frame10 from '../Images/Frame 10.png'
import group from '../Images/Group.png'
import frame5 from '../Images/Frame 5.png'
import frame8 from '../Images/Frame 8.png'

export default function Main() {
  return (
    <section className='main-container'>
        <div className='main-div1 d-flex'>
            <div className='my-4 main-div2 '>
                <p className='main-text1'>Restock your Shop with ease</p>
                <img src={group} className='w-25'/>
                <p className='main-text2'>Take advantage of a marketplace that offers several advantages when it comes to buying consumer products</p>
                <div className='my-5'>
                    <a href=''><img src={frame5} className='img-link'/></a>
                    <a href='' className='mx-5'><img src={frame8} className='img-link'/></a>
                </div>
            </div>
            <div className='main-div3'>
              <img src={frame10}  className=' big-frame'/>
            </div>
        </div>    
    </section>
  )
}
