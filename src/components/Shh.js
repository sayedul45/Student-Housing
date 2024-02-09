import React from 'react'
import HallHero from './HallHero'
import Banner from './Banner';
import Header from './Header';
import Hall from './Hall';
import Maps from './Maps';
import Navbar from './Navbar';
import Footer from './Footer';
import Sheikh from '../Images/Sheikh.png';
export default function Shh() {
    return (
        <>
            <Navbar />
            <HallHero hero="roomsHero" hallImg={Sheikh} />
            <Banner cname='hasina' title="Shiekh Hasina Hall" subtitle="Our Info" />
            {/* <Header name="Room Info" /> */}
            <div className="head">
                <h1>Room Info</h1>
            </div>
            <Hall a="250" b="230" c="234" d="123" />
            <div>
                <Header name="Location Details" />
                <Maps lats="23.417240233029727" lngs="91.136975180087659489" />
            </div>
            <div style={{ marginTop: '420px' }}>
                <Footer />
            </div>
        </>
    );
}