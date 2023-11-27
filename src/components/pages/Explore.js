import React from 'react';
import AmenityList from '../AmenityList';
import amenities from '../amenities';

const Explore = () => {
    return (
        <div>
            <h1>Explore</h1>
            <AmenityList amenities={amenities} />
        </div>
    )
}


export default Explore;