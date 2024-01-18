import React from 'react';


import '../../styles/card.css';
import Feature from '../../assets/images/campgrounds/carson-pegasus/carson-feature.jpg';
import {ReactComponent as Star }  from '../../assets/images/_icons/star_full.svg';


function CampCard({id, name, price}) {

    return (
        <div className="card" key={id}>
            <div className="card-top">
                <img src={Feature} alt="" className="card-feature" />
            </div>
            <div className="card-content">
                <span className="name">{name}</span>
                <span className="distance">300kms away</span>
                <span className="price">${price}+</span>
                <span className="rating">4.6 <Star className="star" /></span>
            </div>
        </div>
    );
};

export default CampCard;