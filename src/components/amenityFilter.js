import React from 'react';
import AmenityList from './AmenityList';
import amenitiesMap from './amenitiesMap';
import CardGrid from './cardGrid';
import Button from './common/button';

import '../styles/amenityFilter.css';


function AmenityFilter() {
    return (
        <div id="amenityFilter">
            <AmenityList amenities={amenitiesMap} />
            <CardGrid />
            <Button className="btn">Browse more campgrounds</Button>
        </div>
    );
};

export default AmenityFilter;