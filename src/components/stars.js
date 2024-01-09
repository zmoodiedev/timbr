import React from 'react';
import {ReactComponent as Star }  from '../assets/images/_icons/star_full.svg';

import '../styles/stars.css';

function Stars() {
    return (
        <div class="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

export default Stars;