import React from 'react'
import HallHero from './HallHero'
import Banner from './Banner';
import Header from './Header';
import Hall from './Hall';
import Maps from './Maps';
import datta from '../Images/datta.png';
import Navbar from './Navbar';
import Footer from './Footer'
export default function Ddh() {
    return (
        <div>
            <Navbar />
            <HallHero hero="roomsHero" hallImg={datta} />
            <Banner cname='datta' title="Dhirendrahnath Datta Hall" subtitle="Our Info" />
            <div className="head">
                <h1>Room Info</h1>
            </div>
            {/* <Header name="Room Info" />
            <Hall a="250" b="230" c="234" d="123" /> */}
            <Hall a="250" b="230" c="234" d="123" />

            <div>
                <Header name="Location Details" />
                <Maps lats="23.4175451981558" lngs="91.13567100445097" />
            </div>
            <div style={{ marginTop: '420px' }}>
                <Footer />
            </div>


        </div>
    );
}