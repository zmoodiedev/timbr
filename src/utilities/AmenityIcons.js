import React from 'react';

const AmenityIcons = ({ amenities, amenitiesMap }) => {
    return (
        <div className='cg-available-amenities amenity-list'>
            {amenities.map((name, index) => {
                const matchedAmenity = amenitiesMap.find(amenity => amenity.name === name);
                const Icon = matchedAmenity ? matchedAmenity.icon : null;
                return Icon ? <Icon key={index} className="amenity-icon" title={name} /> : null;
            })}
        </div>
    );
};

export default AmenityIcons;