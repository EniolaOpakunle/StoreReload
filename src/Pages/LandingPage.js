import React from 'react'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Display from '../components/Display';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeOffer from '../components/WhatWeOffer';
import ShopWithUs from '../components/ShopWithUs';
import GoCashless from '../components/GoCashless';
import Download from '../components/Download';
import Fag from '../components/Fag';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <section>
        {/* <Navbar/> */}
        <Main/>
        <Display/>
        <WhoWeAre/>
        <WhatWeOffer/>
        <ShopWithUs/>
        <GoCashless/>
        <Download/>
        <Fag/>
        <Footer/>
    </section>
  )
}
