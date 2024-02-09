import Resident from "./Resident";
import "./ResidentStyle.css";
import React, { useState } from 'react'
function ResidentData(props) {
  return (
    <>
      <div className="r-card">
        <div className="r-image">
            <img src={props.image} alt="image is loading.." />
        </div>
        <input id="ch" type="checkbox" />
        <h4>{props.heading}</h4>
        <p>{props.show}</p>
        <div className="content">
          <p>{props.text}</p>
          <label htmlFor="ch">Read Less</label>
        </div>
        <label htmlFor="ch">Read More</label>
      </div>
    </>
  );
}

export default ResidentData;
