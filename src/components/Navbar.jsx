import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Intelligent Academic Advising System</h1>
            <ul className="nav-links">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
