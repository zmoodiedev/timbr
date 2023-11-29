import React from 'react';

const AmenityItem = ({ name, icon }) => {
    return (
      <div className="amenity-icon">
        <img src={icon} alt={name} className="amenity" />
      </div>
    );
  };

export default AmenityItem;