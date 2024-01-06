import React from 'react';
import Card from './card';
import Button from './button';

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

            <Button>
                Browse more campgrounds
            </Button>
        </div>
    );
};


export default CardGrid;