import React from 'react';
import { getAuth } from "firebase/auth";
import ActivityList from "../activityList";
import activities from "../activities";
import '../../styles/userCard.css';


    const auth = getAuth();
    const user = auth.currentUser;


function UserCard() {

    return (
        <div id='userCard'>
            <div id='userHeader'>
                <div className='user-image'>
                    <img src={user.photoURL} alt='Test Name' />
                </div>
                <h4 className='username'>{user.displayName}</h4>
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