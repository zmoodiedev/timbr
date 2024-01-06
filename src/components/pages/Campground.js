import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons'
import Button from "../button";
import '../../styles/campground.css';

const Campground = () => {
    return (
        <div className="container">
            <div className="cg-header">
                <div className="cg-name">
                    <h1>Carson Pegasus Provincial Park</h1>
                </div>
                <div className="cg-interact">
                    <Button>Submit a photo</Button>
                    <a href="#" className="share" title="Share"><FontAwesomeIcon icon={faShareNodes} /></a>
                    <a href="#" className="favorite" title="Favorite"><FontAwesomeIcon icon={faHeart} /></a>
                </div>
            </div>
            
            <div className="camp-photos">
                <div className="featured-photo"><img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="" /></div>
                <div className="photo-1"><img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="" /></div>
                <div className="photo-2"><img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="" /></div>
                <div className="photo-3"><img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="" /></div>
                <div className="photo-4"><img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="" /></div> 
            </div>
            <div className="cg-details">
                <div className="cg-details-l">
                    <p>Sed id semper risus in. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Maecenas accumsan lacus vel facilisis volutpat est. Sit amet aliquam id diam maecenas ultricies mi. Turpis egestas integer eget aliquet nibh praesent. Magna fermentum iaculis eu non diam phasellus vestibulum. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Convallis a cras semper auctor. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Scelerisque fermentum dui faucibus in ornare quam viverra. Ac turpis egestas integer eget aliquet nibh. Nibh tortor id aliquet lectus proin nibh nisl.</p>

                    <div className="cg-icons">
                        <div className="cg-amenities">
                            <h3>Amenities</h3>
                        </div>
                        <div className="cg-activities">
                            <h3>Activities</h3>
                        </div>
                    </div>

                    <hr />

                    <div className="reviews">
                        <h3>Reviews</h3>
                        <Button>Read all reviews</Button>
                    </div>
                </div>
                <div className="cg-details-r">
                    <h3>Location</h3>
                </div>
            </div>
        </div>
    )
}

export default Campground;