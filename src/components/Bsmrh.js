import React from 'react'
import HallHero from './HallHero'
import Banner from './Banner';
import Header from './Header';
import Hall from './Hall';
import Maps from './Maps';
import Navbar from './Navbar';
import Footer from './Footer';
import bangabondhu from '../Images/bangabondhu.png';
export default function Bsmrh() {
    return (
        <>
            <Navbar/>
            <HallHero hero="roomsHero" hallImg={bangabondhu}/>   
            <Banner cname="bsmrh" title="Bangabondhu Sheikh Mujibur Rahman Hall" subtitle="Our Info"/>
            <Header name="Room Info" />
            <Hall a="250" b="230" c="234" d="123" />
                
            <div>
            <Header name="Location Details"/>
            <Maps lats="23.41658968344056" lngs="91.13422048091242"/>
            </div>
            <div style={{ marginTop: '420px' }}>
                <Footer />
            </div>
        </>
    );
}