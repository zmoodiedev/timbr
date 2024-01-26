import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import '../../styles/userCard.css';



const UserCard = ({username, verified}) => {

    return (
        <div id='userCard'>
            <div id='userHeader'>
                <div className='user-image'>
                    <img src="#" alt={username} />
                </div>
                <div className="user-status">
                    <h4 className='username'>{username}</h4>
                    <span className='user-joined'>Joined in 2023</span>
                    <span className='user-verified'>
                        { verified ?(
                            <span className="status-y">Verified</span>
                        ) : (
                            <span className="status-n">Not Verified</span>
                        )}
                    </span>
                    <div className='user-stats'>
                        <div className='user-favourites'>8 Favorites</div>
                        <div className='user-reviews'>2 Reviews</div>
                    </div>
                    
                </div>
            </div>
            
            <div id='userActivities'>
                <h5>Favourite Activities</h5>
                {/*<ActivityList activities={activitiesMap} className="user-activities" /> */}
            </div>
        </div>
    );
};

export default UserCard;