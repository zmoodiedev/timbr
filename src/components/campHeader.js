import React from 'react';
import Button from './common/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons';

function CampgroundHeader({name}) {

    return (
        <div className="cg-header">
            <h1>{name}</h1>
            <div className='cg-interactions'>
                <Button className="share"><FontAwesomeIcon icon={faShareNodes} /></Button>
                <Button className="favorite"><FontAwesomeIcon icon={faHeart} /></Button>
                <Button className="btn">Submit a review</Button>
            </div>
        </div>
    )
};

export default CampgroundHeader;