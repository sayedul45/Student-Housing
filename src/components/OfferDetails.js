// OfferDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import Offers from "./Offer"; // Import your list of offers

const OfferDetails = () => {
  const { id } = useParams();

  // Find the offer by ID
  const offer = Offers.find((offer) => offer.id === parseInt(id));

  if (!offer) {
    return <div>Offer not found</div>;
  }

  return (
    <div>
      <h2>{offer.destTitle}</h2>
      <p>Location: {offer.location}</p>
      <p>Price: {offer.price}</p>
      {/* Display other offer details here */}
    </div>
  );
};

export default OfferDetails;
