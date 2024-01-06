import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';


export default function App() {
    return (
        <nav className="navbar container">
            <div className="logo">
                <a href="/">tmbr</a>
            </div>
            <ul className="main-nav">
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/">Camping Tips</Link></li>
                <li><Link to="/contact">Submit a Campground</Link></li>
            </ul>
            <div className="auth">
                <a href="signup">Sign Up</a> | <a href="/user">Log In</a>
            </div>
        </nav>

    );
};