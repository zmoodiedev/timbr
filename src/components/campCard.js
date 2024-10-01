import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import CardDetails from './cardDetails';
import placeholder from '../assets/images/defaultImg.jpg';
import '../styles/campCard.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

function CampCard({id, images, name, location, priceRange}) {

    return (
        <>
            
                <div className="card" key={id}>
                    <div className="card-img">
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
                        <div className="card-header">
                            <div className="name">{name}</div>
                            <div className="location">Temporary Location</div>
                        </div>
                        <CardDetails />
                        <Link to={`/campground/${id}`} key={id} className="card-link">View Campground</Link>
                    </div>
                </div>
        </>
    );
};

export default CampCard;