import React from 'react';
import AdSpaceCard from '../adSpaceCard';
import CampingTipsCard from '../campingTipsCard';
import '../../styles/homeCards.css';


function HomeCards() {
    return (
        <div id="homeCards">
            <AdSpaceCard />
            <CampingTipsCard />
        </div>
    );
};

export default HomeCards;