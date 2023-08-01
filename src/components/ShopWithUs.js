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
    <section className='w-100 shop-container'>
        <div className='container'>
            <p className='text-center shop-name'> SHOP WITH US</p>
            <p className='text-center shop-subname'>Stock up your shops easily with consumer products and medical supplies from the comfort of you space. </p>
            <button className='shop-btn my-3'>
                Download App for Free
            </button>
            <div className='d-flex justify-content-space-between'>
                <p className='category-title'>Consumer Products</p>
                <p>
                    <a href='' className='seeAll'>See All</a>
                </p>
            </div>
            <div className='row'>
                <div className='card shop-card col-lg-4'>
                    <img src={milo} className='card-img'/>
                    <p className='card-title shop-title'>Milo</p>
                </div>
                <div className='card shop-card col-lg-4'>
                    <img src={cowbell} className='card-img'/>
                    <p className='card-title shop-title'>Cowbell</p>
                </div>
                <div className='card shop-card col-lg-4'>
                    <img src={pampers} className='card-img'/>
                    <p className='card-title shop-title'>Pampers</p>
                </div>
            {/* </div> */}
            {/* <div className='d-flex shop-div2' id='shop-div2'> */}
                <div className='card shop-card  col-lg-4'>
                    <img src={spaghetti} className='card-img'/>
                    <p className='card-title shop-title'>Spaghetti</p>
                </div>
                <div className='card shop-card col-lg-4'>
                    <img src={bournvita} className='card-img'/>
                    <p className='card-title shop-title'>Bournvita</p>
                </div>
                <div className='card shop-card col-lg-4'>
                    <img src={caprisun} className='card-img'/>
                    <p className='card-title shop-title'>Capri Sun</p>
                </div>
            {/* </div> */}
            <div className='d-flex justify-content-space-between'>
                <p className='category-title'>Medical Supplies</p>
                <p>
                    <a href='' className='seeAll'>See All</a>
                </p>
            </div>
            {/* <div className='d-flex shop-div2' id='shop-div2'> */}
                <div className='card shop-card col-lg-4 col-md-6'>
                    <img src={drug1} className='card-img'/>
                    <p className='card-title shop-title'>Paludrine</p>
                </div>
                <div className='card shop-card col-lg-4 col-md-6'>
                    <img src={drug2} className='card-img'/>
                    <p className='card-title shop-title'>Lariam</p>
                </div>
                <div className='card shop-card col-lg-4 col-md-6'>
                    <img src={drug3} className='card-img'/>
                    <p className='card-title shop-title'>Falcigo</p>
                </div>
            </div>
        </div>
    </section>
  )
}
