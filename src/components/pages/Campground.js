import React from "react";
import '../../styles/campground.css';

const Campground = () => {
    return (
        <div className="container">
            <h1>Carson Pegasus Provincial Park</h1>
            <div className="camp-photos">
                <div className="featured-photo"><img src="#" alt="" /></div>
                <div className="photo-1"><img src="#" alt="" /></div>
                <div className="photo-2"><img src="#" alt="" /></div>
                <div className="photo-3"><img src="#" alt="" /></div>
                <div className="photo-4"><img src="#" alt="" /></div> 
            </div>
            <div className="details-wrap">
                <div className="details-left">Left</div>
                <div className="details-right">Right</div>
            </div>
        </div>
    )
}

export default Campground;