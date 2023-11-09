import React from 'react';
import '../styles/nav.css'

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="index.html">Timbr</a>
            </div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="explore.html">Explore</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div className="auth">
                <a href="signup.html">Sign Up</a> | <a href="login.html">Log In</a>
            </div>
        </nav>

    );
};


export default Navigation;