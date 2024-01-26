import React from 'react';
import CampGrid from './campGrid';
import '../styles/cardgrid.css';

function Suggestions() {
    return (
        <div className="container card-grid-wrap">
            <h2>Suggested Destinations</h2>
            <CampGrid />
        </div>
    );
};


export default Suggestions;