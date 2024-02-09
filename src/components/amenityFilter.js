import React from 'react';
import { Link } from 'react-router-dom';
import CampGrid from './campGrid';
import Button from './common/button';

import '../styles/amenityFilter.css';


function AmenityFilter() {
    return (
        <div id="amenityFilter" className="container">
            <CampGrid limit={4} />
            <Link to="/explore">
                <Button className="btn" href="/explore">Explore more campgrounds</Button>
            </Link>
        </div>

        
    );
};

export default AmenityFilter;