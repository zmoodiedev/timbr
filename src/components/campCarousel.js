import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Loader from './common/loader';
import CampCard from './campCard';

import '../styles/carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "campgrounds"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
    return data;
    
}

const Carousel = ({ limit }) => {
    const [campgroundData, setCampgroundData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            console.log(data); // Check what's being fetched
            setCampgroundData(data);
            setIsLoading(false);
        }
        fetchData();
    }, []);


    if (isLoading) return <Loader />;

    return (
        <>
            {campgroundData[0] ? (
                <div id="campGrid">
                    <div className="card-grid-wrap">
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            loop={true}
                            spaceBetween={50}
                            slidesPerView={1}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                                1440: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },

                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className="camp-carousel"
                        >
                                {campgroundData.map((campground, index) => (
                                    <SwiperSlide key={index}>
                                        <CampCard
                                            id={campground.id}
                                            images={campground.images}
                                            name={campground.name}
                                            priceRange={campground.priceRange}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                ) : (
                    <p>There are no campgrounds currently listed.</p>
                )}
            </>
        );
    };

export default Carousel;