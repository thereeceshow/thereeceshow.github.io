import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Splash() {
    return (
        <div className="Splash container-fluid d-flex align-items-center justify-content-center">
            <div className="row text-center mb-5 pb-4">
                <h1>
                    Hi, I'm Reece.  Thanks for Stopping by.
                </h1>
                <h3 className="mt=2">
                    I want to help you.  I build and develop solutions that solve problems.
                </h3>
                {/* <Link to="/home" className="btn rounded-pill btn-secondary mt-2">Click Here</Link> */}
                <div className="text-center p-2"><Link className="btn btn-secondary" to="/home"> Check it Out </Link></div>
            </div>
        </div>
    );
}

export default Splash;