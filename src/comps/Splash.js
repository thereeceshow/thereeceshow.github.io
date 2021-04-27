import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Splash() {
    return (
        <div className="Splash">
            <div className="row text-center mt-5 p-5">
                <h1 className="mt-3 p-3">
                    Hi, I'm Reece.  Thanks for Stopping by.
                </h1>
                <h3 className="mt=2">
                    I want to help you.  I build and develop solutions that solve problems.
                </h3>
                {/* <Link to="/home" className="btn rounded-pill btn-secondary mt-2">Click Here</Link> */}
                <div className="text-center mt-4 p-3"><Link className="btn btn-lg rounded-pill btn-secondary mt-2" to="/home">Check it Out</Link></div>
            </div>
        </div>
    );
}

export default Splash;