import React from 'react';
import AmenityList from './AmenityList';
import amenities from './amenities';
import CardGrid from './cardGrid';
import Button from './common/button';

import '../styles/amenityFilter.css';


function AmenityFilter() {
    return (
        <div id="amenityFilter">
            <AmenityList amenities={amenities} />
            <CardGrid />
            <Button className="btn">Browse more campgrounds</Button>
        </div>
    );
};

export default AmenityFilter;