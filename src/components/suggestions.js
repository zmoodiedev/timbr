import React from 'react';
import Carousel from './campCarousel';
import BottomDivider from './common/bottomDivider';
import { Link } from 'react-router-dom';
import Button from '../components/common/button';
import '../styles/suggestions.css';

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="container">
                <h2>Suggested Destinations</h2>
            </div>
            
            <Carousel />
            
            <div className="container">
                <Link to="/explore"><Button className="btn explore-more">Browse more campgrounds</Button></Link>
            </div>
            <BottomDivider />
        </div>
    );
};


export default Suggestions;