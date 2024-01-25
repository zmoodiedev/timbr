import React from 'react';

import CardGrid from './cardGrid';
import Button from './common/button';

import '../styles/amenityFilter.css';
import AmenityIcons from '../utilities/AmenityIcons';
import amenitiesMap from '../utilities/amenitiesMap';


function AmenityFilter() {
    return (
        <div id="amenityFilter">
            {/*<AmenityIcons amenitiesMap={amenitiesMap} />*/}
            <CardGrid />
            <Button className="btn">Browse more campgrounds</Button>
        </div>

        
    );
};

export default AmenityFilter;