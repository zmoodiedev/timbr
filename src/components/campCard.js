import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar, faDollarSign as dollarSign, faTents as tents } from '@fortawesome/free-solid-svg-icons';
import placeholder from '../assets/images/defaultImg.jpg';
import '../styles/card.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

function CampCard({id, images, name, priceRange}) {

    return (
        <div className="card" key={id}>
            <div className="card-top">
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="image-carousel"
            >
                {images && images.length > 0 ? (
                    images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Campground ${name}`} className="card-feature" />
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <img src={placeholder} alt={`Campground ${name}`} className="card-feature" />
                    </SwiperSlide>
                )}
            </Swiper>
                
            </div>
            <div className="card-content">
            <Link to={`/campground/${id}`} key={id} className="camp-link">
                <div className="camp-details">
                    <span className="category">Glamping</span>
                    <span className="name">{name}</span>
                </div>
                <div className="card-footer">
                    <div className="type">
                        <FontAwesomeIcon className="card-icon tents" icon={tents} />
                    </div>
                    <div className="price">
                        <FontAwesomeIcon className="card-icon dollar" icon={dollarSign} />
                        { priceRange && (
                            <span className="price"><span className="dol">$</span>{priceRange[0]} - <span className="dol">$</span>{priceRange[1]}</span>
                        )}
                    </div>
                    <div className="rating"><FontAwesomeIcon className="card-icon star" icon={filledStar} /> 4.6</div>
                    
                </div>
            </Link>
            </div>
        </div>
    );
};

export default CampCard;