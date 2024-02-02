import React from 'react';
import getTimeDifference from '../hooks/getTimeDifference';
import '../styles/review.css';


const Review = ({ review }) => {
    const timeDifference = getTimeDifference(review.timestamp.toDate().toLocaleDateString("en-US"));

    return (
        <div className="review">
            <div className="review-header">
                <div className="user-tn">
                    <img src={review.profilePic} alt={review.username} />
                </div>
                <div className="user-details">
                    <span className="user-name ">{review.username}</span>
                    <span className="user-location">{ review.userLocation ? (review.userLocation) : (<div></div>) }</span>
                    <span className="rating">{review.rating}</span> <span className="review-time">{timeDifference}</span>
                </div>
            </div>
            <div className="user-review">
                <p>{review.reviewContent}</p>
            </div>
        </div>
    );
};

export default Review;