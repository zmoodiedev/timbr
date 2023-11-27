import React from 'react';
import AmenityItem from './AmenityItem';

const AmenityList = ({ amenities }) => {

  return (
    <div className="amenity-list">
      {amenities.map((amenity, index) => (
        <AmenityItem key={index} name={amenity.name} icon={amenity.icon} />
      ))}
    </div>
  );
};

export default AmenityList;