import React from 'react';
import Card from './card';

import '../styles/cardgrid.css';

function CardGrid() {
    return (
        <div id="cardGrid" className="container">
            <Card />
            <Card />
            <Card />
            
        </div>
    );
};


export default CardGrid;