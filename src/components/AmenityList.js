import React from 'react';
import AmenityItem from './AmenityItem';
import '../styles/amenities.css';

const AmenityList = ({ amenities, className }) => {

  return (
    <div className={`amenity-list ${className}`}>
      {amenities.map((amenity, index) => (
        <AmenityItem key={index} name={amenity.name} icon={amenity.icon} />
      ))}
    </div>
  );
};

export default AmenityList;