import React from 'react';
import placeholder from '../assets/images/defaultImg.jpg';
import Button from './common/button';


const TipCard = ({ title, body }) => {
    console.log(title, body); // For debugging
    return (
        <div className="tipCard">
            <img src={placeholder} className="featured-img" alt="Tip Title" />
            <div className="tip-content">
                <div className="category">Outdoors</div>
                <h2 className="tip-title">{title}</h2>
                <Button className="btn btn-secondary">Read full article</Button>
                </div>
        </div>
    );
};

export default TipCard;