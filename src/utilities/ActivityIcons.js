import React from 'react';

const ActivityIcons = ({ activities, activitiesMap }) => {
    return (
        <div className='cg-available-activities activity-list'>
            {activities.map((name, index) => {
                const matchedActivity = activitiesMap.find(activity => activity.name === name);
                const Icon = matchedActivity ? matchedActivity.icon : null;
                return Icon ? <Icon key={index} className="activity-icon" title={name} /> : null;
            })}
        </div>
    );
};

export default ActivityIcons;