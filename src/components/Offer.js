import React from "react";
import { Link } from "react-router-dom";
import './OfferStyle.css';
import Maps from "./Maps";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
import { useState } from "react";

const Offers = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Even House',
        location: 'Police line',
        price: '$20',
        discount: '30%',
        bed: '1 Bed'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Odd House',
        location: 'Dhormopur',
        price: '$25',
        discount: '23%',
        bed: '2 Beds'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Prime House',
        location: 'Race Course',
        price: '$22',
        discount: '27%',
        bed: '2 Beds'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Binary House',
        location: 'Jawtola',
        price: '$20',
        discount: '20%',
        bed: '1 Bed'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Decimal House',
        location: 'Kandirpar',
        price: '$27',
        discount: '25%',
        bed: '2 Beds'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Decimal House',
        location: 'Tomchom Bridge',
        price: '$24',
        discount: '20%',
        bed: '1 Bed'
    }

];

const Offer = () => {
    const[show,setShow]=useState(false)
    const Showname=()=>{
        if(show===true){
            setShow(false);
        }
        else {
           setShow(true)
        }
    }
    return (
        <div className="offer-container">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>Here you will be able to find single bed , double bed rooms</p>
                </div>
                <div className="mainContent-grid">
                    {
                        Offers.map(({ id, imgSrc, destTitle, location, price, discount, bed }) => {
                            return (
                                <div className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt={destTitle} />
                                        <span className="discount">
                                            {discount} Off
                                        </span>
                                    </div>
                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>{price}</h4>
                                            <span className="status">
                                                For Rent
                                            </span>
                                        </div>
                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <i class="fa-solid fa-bed"></i>
                                                <small>{bed}</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <i class="fa-solid fa-bath"></i>
                                                <small>2 Bathtub</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <i class="fa-solid fa-wifi"></i>
                                                <small>Wi-Fi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <i class="fa-solid fa-car"></i>
                                                <small>Car</small>
                                            </div>
                                        </div>
                                        <div className="location flex">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <small>{location},Cumilla-3500</small>
                                        </div>
                                        {/* <button className="butn flex">
                                            <p>View Details :</p>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </button> */}
                                        <Link to={`/offer/${id}`} className="butn flex" onClick={Showname}>
                                            <p>View Details :</p>
                                            <i className="fa-solid fa-arrow-right"></i>
                                             {
                                                show && (<h1>ami</h1>)
                                             }
                                            {/* <Maps lats="90.22222222" lngs="23.4444444444" /> */}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default Offer;