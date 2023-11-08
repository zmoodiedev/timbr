import React from 'react';
import '../styles/card.css';

const Card = () => {
    return (
        <div className="card">
            <div className="card-top">
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-672649103335260847/original/b163c127-222a-4bcb-b592-fa13c36930b7.jpeg?im_w=720" alt="" className="card-img" />
            </div>
            <div className="card-content">
                <span className="card-title">Campground Name</span>
                <span className="card-rating">Rating</span>
                <span className="card-price">Price</span>
            </div>
        </div>
    );
};

export default Card;