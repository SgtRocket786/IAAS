
import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1>Intelligent Academic Advising</h1>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Course Plan</a></li>
                <li><a href="#">Advising</a></li>
                <li className="profile-menu">
                    <button className="profile-button">Profile</button>
                    <div className="profile-dropdown">
                        <a href="#">View Profile</a>
                        <a href="#">Sign Out</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
