import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';


export default function App() {
    return (
        <nav className="navbar container">
            <div className="logo">
                <a href="/">Timbr</a>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="auth">
                <a href="signup">Sign Up</a> | <a href="/user">Log In</a>
            </div>
        </nav>

    );
};