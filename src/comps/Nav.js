import React, { Component } from 'react';

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-gradient shadow">
            <div className="container-fluid">
                <a className="navbar-brand mx-3" href="#">
                <img className="image-fluid rounded-circle me-2" src="./img/Reece.jpg" alt="" width="30" height="24"></img>
                    Reece <span className="text-dark">Walter</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-3 justify-content-end mx-3" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                git.social
                                </a>
                            <ul className="dropdown-menu bg-white text-dark border-0 mt-2 rounded-3 dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="https://github.com/thereeceshow" target="new"><i
                                    className="fab fa-github fa-2x" id="github"></i> GitHub</a></li>
                                <li><a className="dropdown-item" href="https://linkedin.com/in/reecewalter/" target="new"><i
                                    className="fab fa-linkedin fa-2x" id="linkedin"></i> LinkedIn</a></li>
                                <li><a className="dropdown-item" href="https://twitter.com/ReeceWalter" target="new"><i
                                    className="fab fa-twitter-square fa-2x" id="twitter"></i> Twitter</a></li>
                                <li><a className="dropdown-item" href="https://www.instagram.com/thereeceshow/" target="new"><i
                                    className="fab fa-instagram fa-2x" id="instagram"></i> Instagram</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Nav