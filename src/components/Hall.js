import React from 'react'
import './HallStyle.css';
export default function Hall(props) {
    return (
        <div>
            <section className="counter top">
                <div className="cont grid">
                    <div className="box">
                        <div className="icn">
                            <i className="fas fa-hotel"></i>
                        </div>
                        <div className="info">
                            <h1>{props.a}</h1>
                            <hr />
                            {/* <span className="timer" data-to="152" data-speed="200"></span> */}
                            <span className="medium">Rooms</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icn">
                            <i className="fas fa-bed"></i>
                        </div>
                        <div className="info">
                            <h1>{props.b}</h1>
                            <hr />
                            {/* <span className="timer" data-to="152" data-speed="200"></span> */}
                            <span className="medium">Seats</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icn">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="info">
                            <h1>{props.c}</h1>
                            <hr />
                            {/* <span className="timer" data-to="152" data-speed="200"></span> */}
                            <span className="medium">Residential Students</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icn">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="info">
                            <h1>{props.d}</h1>
                            <hr />
                            {/* <span className="timer" data-to="152" data-speed="200"></span> */}
                            <span className="medium">Non-Residential Students</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
