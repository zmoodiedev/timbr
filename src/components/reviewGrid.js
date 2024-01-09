import React from 'react';
import Review from './review';

import '../styles/reviewgrid.css';

function ReviewGrid() {
    return (
        <div className="review-grid-wrap">
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