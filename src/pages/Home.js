import React from 'react';
import Marquee from '../components/marquee';
import FeaturedCampgrounds from '../components/featuredCampgrounds';
import ActivityDisplay from '../components/activityDisplay';
import HomeCards from '../components/layout/homeCards';

import '../styles/home.css';


const Home = () => {
    return (
        <>
            <Marquee />

            <div className="home-body">
            
                <FeaturedCampgrounds />
                <ActivityDisplay />
                <HomeCards />
            </div>
        </>
    )
}

export default Home;