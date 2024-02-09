import React from 'react';
import Button from './common/button';
import Popup from 'reactjs-popup';
import UserFavorite from './userFavorite';
import SubmitReview from './submitReview';

import 'reactjs-popup/dist/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes} from '@fortawesome/free-solid-svg-icons';


function CampgroundHeader({name}) {



    return (
        <div className="cg-header">
            <h1>{name}</h1>
            <div className='cg-interactions'>
                <Button className="share"><FontAwesomeIcon title="Share" icon={faShareNodes} /></Button>
                <UserFavorite />
                <Popup trigger={<button className="btn">Submit a review</button>} position="center center" modal ={true} className="submit-review">
                    <SubmitReview name={name} />
                </Popup>
            </div>
        </div>
    )
};

export default CampgroundHeader;