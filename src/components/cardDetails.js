import React from 'react';
import '../styles/campCard.css';

function CardDetails({id, priceRange}) {

    return (
        <div className="card-details" key={id}>
            <div className="card-reviews">
                <span className="review-num">24</span>
                Reviews
            </div>
            <div className="card-price">
                <span className="price-num">$35+</span>
                Price
            </div>
            <div className="card-favs">
                <span className="favs-num">16</span>
                Favorites
            </div>
        </div>
    );
};

export default CardDetails;