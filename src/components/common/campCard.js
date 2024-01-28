import React from 'react';
import '../../styles/card.css';
import {ReactComponent as Star }  from '../../assets/images/_icons/star_full.svg';


function CampCard({id, image, name, priceRange}) {

    return (
        <div className="card" key={id}>
            <div className="card-top">
                <img src={image} alt={`Campground ${name}`} className="card-feature" />
            </div>
            <div className="card-content">
                <span className="rating">4.6 <Star className="star" /></span>
                <span className="name">{name}</span>
                <span className="distance">300kms away</span>
                { priceRange && (
                    <span className="price"><span className="dol">$</span>{priceRange[0]} - <span className="dol">$</span>{priceRange[1]}</span>
                )}
            </div>
        </div>
    );
};

export default CampCard;