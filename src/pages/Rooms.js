import React from "react"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RoomImg from "../Images/RoomImg.png";
import Offer from "../components/Offer";
import Hall from "../components/Hall";
import Maps from "../components/Maps";

function Rooms() {
  return (
    <>
       <Navbar/>
       <Hero
       cName="hero-room"
       heroImg={RoomImg}
       title="Choose Your Desire Room"
       />
       <Offer/>
       <Hall/>
       <Maps lats="23.4175451981558" lngs="91.13567100445097"/>
    </>
  );
}

export default Rooms;
