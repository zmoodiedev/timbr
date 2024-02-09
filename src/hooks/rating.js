import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar, faStarHalfStroke as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ value }) => {
    const totalStars = 5;
    let stars = [];
    
    // Add filled stars
    for (let i = 1; i <= totalStars; i++) {
        if (i <= value) {
            stars.push(<FontAwesomeIcon key={i} icon={filledStar} />);
        } else if (i - 0.5 === value) {
            stars.push(<FontAwesomeIcon key={i} icon={halfStar} />);
        } else {
            break; // No more filled stars needed
        }
    }

    // Add outlined stars for the remainder
    while (stars.length < totalStars) {
        stars.push(<FontAwesomeIcon key={`o${stars.length}`} icon={emptyStar} />);
    }

    return (
        <div className="starValue">
            {stars}
        </div>
    );
};

export default Rating;