import React from 'react';

import CardGrid from './cardGrid';
import Button from './common/button';

import '../styles/amenityFilter.css';
import AmenityList from './AmenityList';


function AmenityFilter() {
    return (
        <div id="amenityFilter">
            <AmenityList />
            <CardGrid />
            <Button className="btn">Browse more campgrounds</Button>
        </div>

        
    );
};

export default AmenityFilter;