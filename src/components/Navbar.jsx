
import React from 'react';

const Navbar = () => (
    <nav className="navbar">
        <h1>Intelligent Academic Advising</h1>
        <ul className="nav-links">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Course Plan</a></li>
            <li><a href="#">Advising</a></li>
            <li><button className="profile-button">Profile</button></li>
        </ul>
    </nav>
);

export default Navbar;
