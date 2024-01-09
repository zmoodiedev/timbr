import React from 'react';
import Card from './card';

import '../styles/cardgrid.css';

function CardGrid() {
    return (
        <div className="container card-grid-wrap">
            <div id="cardGrid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};


export default CardGrid;