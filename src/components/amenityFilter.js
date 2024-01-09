import React from 'react';
import AmenityList from './AmenityList';
import amenities from './amenities';
import CardGrid from './cardGrid';

import '../styles/amenityFilter.css';


function AmenityFilter() {
    return (
        <div id="amenityFilter">
            <AmenityList amenities={amenities} />
            <CardGrid />
        </div>
    );
};

export default AmenityFilter;