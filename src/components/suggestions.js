import React from 'react';
import CardGrid from './cardGrid';
import '../styles/cardgrid.css';

function Suggestions() {
    return (
        <div className="container card-grid-wrap">
            <h2>Suggested Destinations</h2>
            <CardGrid />
        </div>
    );
};


export default Suggestions;