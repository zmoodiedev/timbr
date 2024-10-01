import React from 'react';
import CampCarousel from './campCarousel';
import { Link } from 'react-router-dom';
import Button from '../components/common/button';
import '../styles/suggestions.css';

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="container">
                <h2>Suggested Destinations</h2>
            </div>
            <CampCarousel />
            <div className="container">
                <Link to="/explore"><Button className="btn explore-more">Browse more campgrounds</Button></Link>
            </div>
        </div>
    );
};


export default Suggestions;