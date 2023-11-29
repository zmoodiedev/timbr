import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';
import Feature from '../assets/images/campgrounds/carson-pegasus/carson-feature.jpg';
import {ReactComponent as Star }  from '../assets/images/_icons/star_full.svg';

function Card() {
    return (
        <div className="card">
            <Link to="/campground">
                <div className="card-top">
                    <img src={Feature} alt="" className="card-feature" />
                </div>
                <div className="card-content">
                    <span className="name">Carson-Pegasus</span>
                    <span className="distance">300kms away</span>
                    <span className="price">$35+</span>
                    <span className="rating">4.6 <Star className="star" /></span>
                </div>
            </Link>
        </div>
    );
};

export default Card;