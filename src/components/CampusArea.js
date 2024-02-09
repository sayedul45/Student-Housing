import React from 'react'
import campus from '../Images/campus.png';
import HallHero from './HallHero';
import Banner from './Banner';
import Offer from './Offer';
import Navbar from './Navbar';
import Footer from './Footer';
export default function CampusArea() {
    console.log("Running")
  return (
    <>
      <Navbar/>
      <HallHero hero="roomsHero" hallImg={campus}/> 
      <Banner cname='campus' title="Nearby Campus" subtitle="Our Info" />
      <Offer/>
      <Footer/>
     
    </>
  );
}
