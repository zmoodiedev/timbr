import React from 'react';
import Review from './review';

import '../styles/reviewgrid.css';

function ReviewGrid() {
    return (
        <div className="review-grid-wrap">
            <h2>Reviews</h2>
            <div id="reviewGrid">
                <Review />
                <Review />
                <Review />
                <Review />
            </div>

        </div>
    );
};


export default ReviewGrid;