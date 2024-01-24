import React from 'react';
import amenitiesMap from "./amenitiesMap";
import '../styles/amenities.css';

const AmenityList = () => {

  return (
    <div className={`amenity-list`}>
      {amenitiesMap.map((amenity, index) => (
        <amenity.icon className="amenity" key={index} name={amenity.name} icon={amenity.icon} />
      ))}
    </div>
  );
};

export default AmenityList;