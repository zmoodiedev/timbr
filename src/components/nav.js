import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'


export default function App() {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="index.html">Timbr</a>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about.html">About</Link></li>
                <li><Link to="/explore.html">Explore</Link></li>
                <li><Link to="/contact.html">Contact</Link></li>
            </ul>
            <div className="auth">
                <a href="signup.html">Sign Up</a> | <a href="login.html">Log In</a>
            </div>
        </nav>

    );
};