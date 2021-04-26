import React, { Component } from 'react';

function Splash(props) {
    return (
        <div className="Splash">
            <div className="row text-center mt-5 p-5">
                <h1 className="mt-3 p-3">
                    Hi, I'm Reece.  Thanks for Stopping by.
                </h1>
                <h3 className="mt=2">
                    I want to help you.  I build and develop solutions that solve problems.
                </h3>
                <div className="text-center mt-4 p-3"><button className="btn btn-lg rounded-pill btn-secondary mt-2" onClick={() => props.setPageView(props.pageView + 1)}>Check it Out</button></div>
            </div>
        </div>
    );
}

export default Splash;