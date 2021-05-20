import React, { Component } from 'react';
import {
    Link,
    useHistory,
    useLocation
  } from "react-router-dom";

function Nav(props) {
    let history = useHistory();
    let location = useLocation();
    console.log(location.pathname)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-gradient shadow">
            <div className="container-fluid">
                <Link className="navbar-brand mx-3" to="/">
                <img className="image-fluid rounded-circle me-2 border border-secondary" src="./img/Reece.jpg" alt="" width="38" height="38"></img>
                    Reece <span className="text-dark">Walter</span></Link>
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-3 justify-content-end mx-3" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/home' && 'active'}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' && 'active'}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/portfolio' && 'active'}`} to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/contact' && 'active'}`} to="/contact">Contact</Link>
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
                                <li><a className="dropdown-item" href="https://www.instagram.com/thereeceshow/" target="new">
                                <img src="https://www.codewars.com/users/thereeceshow/badges/micro" /></a></li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Nav