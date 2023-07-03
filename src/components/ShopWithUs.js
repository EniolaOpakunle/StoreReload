import React from 'react'
import milo from '../Images/Rectangle 376.png'
import cowbell from '../Images/Rectangle 377.png'
import pampers from '../Images/Rectangle 378.png'
import spaghetti from '../Images/Rectangle 379.png'
import bournvita from '../Images/Rectangle 380.png'
import caprisun from '../Images/Rectangle 381.png'
import drug1 from '../Images/Rectangle 382.png'
import drug2 from '../Images/Rectangle 383.png'
import drug3 from '../Images/Rectangle 384.png'

export default function ShopWithUs() {
  return (
    <section className='shop-container'>
        <div className='shop-div1'>
            <p className='text-center shop-name'> SHOP WITH US</p>
            <p className='text-center shop-subname'>Stock up your shops easily with consumer products and medical supplies from the comfort of you space. </p>
            <button className='shop-btn my-3'>
                Download App for Free
            </button>
            <div className='d-flex shop-div3'>
                <p className='category-title'>Consumer Products</p>
                <p>
                    <a href='' className='seeAll'>See All</a>
                </p>
            </div>
            <div className='d-flex shop-div2'>
                <div className='card shop-card'>
                    <img src={milo} className='shop-image'/>
                    <p className='card-title shop-title'>Milo</p>
                </div>
                <div className='card shop-card'>
                    <img src={cowbell} className='shop-image'/>
                    <p className='card-title shop-title'>Cowbell</p>
                </div>
                <div className='card shop-card'>
                    <img src={pampers} className='shop-image'/>
                    <p className='card-title shop-title'>Pampers</p>
                </div>
            </div>
            <div className='d-flex shop-div2' id='shop-div2'>
                <div className='card shop-card'>
                    <img src={spaghetti} className='shop-image'/>
                    <p className='card-title shop-title'>Spaghetti</p>
                </div>
                <div className='card shop-card'>
                    <img src={bournvita} className='shop-image'/>
                    <p className='card-title shop-title'>Bournvita</p>
                </div>
                <div className='card shop-card'>
                    <img src={caprisun} className='shop-image'/>
                    <p className='card-title shop-title'>Capri Sun</p>
                </div>
            </div>
            <div className='d-flex shop-div4'>
                <p className='category-title'>Medical Supplies</p>
                <p>
                    <a href='' className='seeAll'>See All</a>
                </p>
            </div>
            <div className='d-flex shop-div2' id='shop-div2'>
                <div className='card shop-card'>
                    <img src={drug1} className='shop-image'/>
                    <p className='card-title shop-title'>Paludrine</p>
                </div>
                <div className='card shop-card'>
                    <img src={drug2} className='shop-image'/>
                    <p className='card-title shop-title'>Lariam</p>
                </div>
                <div className='card shop-card'>
                    <img src={drug3} className='shop-image'/>
                    <p className='card-title shop-title'>Falcigo</p>
                </div>
            </div>
        </div>
    </section>
  )
}
