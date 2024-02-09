import React from 'react'
import inside from '../Images/inside.png';
import HallHero from './HallHero';
import Banner from './Banner';
import Offer from './Offer';
import Navbar from './Navbar';
import Footer from './Footer';
export default function InsideCity() {
  return (
    <>
      <Navbar/>
      <HallHero hero="roomsHero" hallImg={inside}/> 
      <Banner cname='inside' title="Inside City" subtitle="Our Info" />
      <Offer/>
      <Footer/>
      
    </>
  );
}
