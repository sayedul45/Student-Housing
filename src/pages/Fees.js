import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeesImg from "../Images/FeesImg.png";
import Footer from '../components/Footer';
import FeesForm from '../components/FeesForm';
function Fees() {
  return (
    <>
     <Navbar/>
       <Hero
       cName="hero-fees"
       heroImg={FeesImg}
       title="Pay Your Bill"
       />
       <FeesForm/>
       <Footer/>
       
    </>
  );
}

export default Fees;
