import React from 'react'
import HallHero from './HallHero'
import Banner from './Banner';
import Header from './Header';
import Hall from './Hall';
import Maps from './Maps';
import nazrul from '../Images/nazrul.png';
import Navbar from './Navbar';
import Footer from './Footer';
export default function knish() {
    return (
        <>
            <Navbar />
            <HallHero hero="roomsHero" hallImg={nazrul} />
            <Banner cname='knih' title="Kazi Nazrul Islam Hall" subtitle="Our Info" />
            {/* <Header name="Room Info" /> */}
            <div className="head">
                <h1>Room Info</h1>
            </div>
            <Hall a="250" b="230" c="234" d="123" />
            <div>
                <Header name="Location Details" />
                <Maps lats="23.41658968344056" lngs="91.13422048091242" />
            </div>
            <div style={{ marginTop: '420px' }}>
                <Footer />
            </div>
        </>
    );
}