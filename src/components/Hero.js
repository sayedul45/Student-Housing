import React from 'react'
import "./HeroStyle.css";
import Typed from 'react-typed';
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="Hero-Image"/>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <div className="typed">
            <p>{props.text}</p>
            <Typed className='retype' strings={
                [
                    'rooms','canteen','newspaper','sports kit'
                ]
            } typeSpeed={100}
              backSpeed={120} loop
             />
            </div>
            <button id='herobtn' type="button" class="btn btn-primary">Get Started</button>
            {/* <a href={props.url} className={props.btnClass}>{props.btnText}</a> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
