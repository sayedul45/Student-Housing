import React from "react"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Resident from "../components/Resident";
import HomeImg from "../Images/HomeImg.jpg";
import home from "../Images/CoU.png";

function Home() {
  return (
    <>
       <Navbar/>
       <Hero
       cName="hero"
       heroImg={home}
       title="Learning and Living Converge"
       text="We provides"
       url="/"
       btnClass="show"
       btnText="Get Started"
       />
       <Landing/>
       <Resident/>
       <Footer/>
    </>
  );
}
export default Home;
