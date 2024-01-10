import React from 'react';

const ActivityItem = ({ name, icon }) => {
    return (
      <div className="activity-icon">
        <img src={icon} alt={name} className="activity" />
      </div>
    );
  };

export default ActivityItem;