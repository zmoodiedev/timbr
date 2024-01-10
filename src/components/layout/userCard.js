import React from 'react';
import ActivityList from "../activityList";
import activities from "../activities";
import '../../styles/userCard.css';

function UserCard() {
    return (
        <div id='userCard'>
            <div id='userHeader'>
                <div className='user-image'>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt='Test Name' />
                </div>
                <h4 className='user-name'>Kylie Foster</h4>
                <span className='user-joined'>Joined in 2023</span>
                <span className='user-verified'>Verified</span>
            </div>
            <div id='userInteraction'>
                <div className='user-favourites'>
                    8 Favorites
                </div>
                <div className='user-reviews'>
                    2 Reviews
                </div>
            </div>
            <div id='userActivities'>
                <h5>Favourite Activities</h5>
                <ActivityList activities={activities} className="user-activities" />
            </div>
        </div>
    );
};

export default UserCard;