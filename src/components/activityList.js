import React from 'react';
import ActivityItem from './activityItem';
import '../styles/activities.css';

const ActivityList = ({ activities, className }) => {

  return (
    <div className={`activity-list ${className}`}>
      {activities.map((activity, index) => (
        <ActivityItem key={index} name={activity.name} icon={activity.icon} />
      ))}
    </div>
  );
};

export default ActivityList;