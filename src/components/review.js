import React from 'react';
import Stars from './stars';
import '../styles/review.css';

function Review() {
    return (
        <div className="review">
           <div className="review-header">
                <div className="user-tn">
                    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="User" />
                </div>
                <div className="user-details">
                    <span className="user-name">Connor</span>
                    <span className="user-location">Banff, Canada</span>
                    <div className="user-review"><Stars /><span className="timestamp"> • 3 days ago</span></div>
                </div>
           </div>
           <div className="review-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
           </div>
        </div>
    );
};

export default Review;