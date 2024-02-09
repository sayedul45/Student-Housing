import React from 'react'
import HallHero from './HallHero'
import Banner from './Banner';
import Header from './Header';
import Hall from './Hall';
import Maps from './Maps';
import Navbar from './Navbar';
import Footer from './Footer';
import Faizunessa from '../Images/Faizunessa.png';
export default function Nfch() {
    return (
        <>
            
            <Navbar />
            <HallHero hero="roomsHero" hallImg={Faizunessa} />
            <Banner cname='faizunessa' title="Nawab Faizunessa Chowdurany Hall" subtitle="Our Info" />
            {/* <Header name="Room Info" /> */}
            <div className="head">
                <h1>Room Info</h1>  
            </div>
            <Hall a="250" b="230" c="234" d="123" />
            <div>
            <Header name="Location Details" />
            <Maps lats="23.417397755434717" lngs="91.13742042679489" />  
            </div>
            <div style={{ marginTop: '420px' }}>
                <Footer />
            </div>
        </>
    );
}
