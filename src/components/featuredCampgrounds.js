import React from 'react';
import Carousel from './campCarousel';

import '../styles/featuredCampgrounds.css';

const FeaturedCampgrounds = () => {
    return (
        <div id="featuredCampgrounds">
            <div className="container">
                <div className="sub-container">
                    <h2><span className="subhead">Explore the </span>Great Outdoors</h2>
                    <p>Discover your perfect camping spot with <span className="highlight">timbr</span>. From rugged backcountry retreats to serene lakeside escapes, we connect you to unforgettable outdoor experiences. Browse our curated gallery of available campgrounds and start your next adventure today.</p>
                </div>
            </div>
            <Carousel limit={10} />
        </div>
    )
}

export default FeaturedCampgrounds;