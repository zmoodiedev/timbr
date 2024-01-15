import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';


function App() {
    return (
        <nav className="navbar container">
            <div className="logo">
                <Link to="/">tmbr</Link>
            </div>
            <ul className="main-nav">
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/">Camping Tips</Link></li>
                <li><Link to="/contact">Submit a Campground</Link></li>
            </ul>
            <div className="auth">
                <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
            </div>
        </nav>

    );
};


export default App;