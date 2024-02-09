import React from 'react';
import AdSpaceCard from '../adSpaceCard';
import TipsCard from '../tipsCard';
import '../../styles/homeCards.css';


function HomeCards() {
    return (
        <div id="homeCards" className="container">
            <AdSpaceCard />
            <TipsCard />
        </div>
    );
};

export default HomeCards;