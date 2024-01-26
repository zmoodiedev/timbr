import React from 'react';

import CampGrid from './campGrid';
import Button from './common/button';

import '../styles/amenityFilter.css';


function AmenityFilter() {
    return (
        <div id="amenityFilter">
            <CampGrid />
            <Button className="btn">Browse more campgrounds</Button>
        </div>

        
    );
};

export default AmenityFilter;