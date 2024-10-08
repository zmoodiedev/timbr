import React, { useState, useEffect } from 'react';
import fetchUserReviewsCount from '../hooks/fetchReviewsCount';
import '../styles/userCard.css';



const UserCard = ({ profilePic, username, verified, reviews }) => {
    const [reviewsCount, setReviewsCount] = useState(0);

    let imageUrl = profilePic;
    if (profilePic instanceof File) {
        imageUrl = URL.createObjectURL(profilePic);
    }

    useEffect(() => {
        const getCount = async () => {
            const count = await fetchUserReviewsCount();
            setReviewsCount(count);
        };

        getCount();
    }, []);

    return (
        <div id='userCard'>
            <div id='userHeader'>
                <div className='user-image'>
                    {imageUrl && <img src={imageUrl} alt={username} />}
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
                        <div className='user-reviews'>{reviewsCount} Reviews</div>
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