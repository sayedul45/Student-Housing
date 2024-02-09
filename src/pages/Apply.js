import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ApplyImg from "../Images/ApplyImg.png";
import Footer from '../components/Footer';
import Registration from '../components/Registration';
function Apply() {
  return (
    <>
      <Navbar/>
       <Hero
       cName="hero-apply"
       heroImg={ApplyImg}
       title="Apply here"
       />
       <Registration/>
       <Footer/>
    </>
  );
}

export default Apply;
