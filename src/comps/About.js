import React, { Component } from 'react';
import '../App.css';


function About(props) {

    return (
        <div className="Splash">
            <div className="row"></div>
            <div className="row mt-5 d-flex justify-content-evenly">
                <h2 className="col-12 px-5">Reece Walter</h2>
                <div className="col-12 col-md-6 px-5">
                <img className="mt-2" src="./img/Reece.jpg" className="img-fluid rounded-circle"></img>
                    <p className="mt-3">
                        My first career was in operations.  In addition to developing people, I spent a lot of time working on designing and implementing tools to increase productivity for my team.
                        I decided to switch careers, and go back to passion I had always had on the back burner.  I became a Certified Scrum Master at the end of 2019
                        in hopes to tie in my leadership and management experience.
                    </p>
                    <p>
                        I decided to take the full plunge in by enrolling in the <a href="https://www.awesomeinc.org/bootcamp">Awesome Inc Bootcamp</a> in the Spring of 2021.  It was one of the best experiences of
                        my life.  The pace was intense, but not only did it force you to learn new systems quickly, it taught you how to learn quickly, and find answers on your own.
                    </p>
                    <p>
                        I look forward to being able to use my new skills to help people and companies identify and solve problems, increase their efficiency, and become more productive and effective.
                    </p>
                </div>
                <div className="col-12 col-md-6 px-5 justify-content-center"><img src="./img/mbshot.jpg" className="img-fluid"></img></div>
            </div>
            <div className="row" />
        </div>
    );
}

export default About;