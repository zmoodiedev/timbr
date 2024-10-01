import React from 'react';
import CampFilter from '../components/campFilter';
import CampGrid from '../components/campGrid';
import './explore.css';

const Explore = ({maxNumber}) => {


    return (
        <div className="explore-wrap">
            <CampFilter />
            <div className="explore-content">
                <h1>Explore</h1>
                <CampGrid />
            </div>
        </div>
    )
};

export default Explore;