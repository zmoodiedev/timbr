import React from "react";
import Button from "../components/common/button"
import TopDivider from './common/topDivider';
import ActivitiesBlob from "../assets/images/activities_blob.png";
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import '../styles/activityDisplay.css';

const ActivityDisplay = () => {
    return (
        <div id="activityDisplay">
            <TopDivider />
            <div className="container display-wrap">
                <div className="display-l">
                    <Parallax translateX={['-100px', '25px']}  speed={10}>
                        <img src={ActivitiesBlob} alt="" />
                    </Parallax>
                </div>
                <div className="display-r">
                    <div className="signup-call">
                        <h2>When You Need <span className="brush">More</span><br/>Than Relaxation</h2>
                        <p>From rugged back country retreats to serene lakeside escapes, we connect you to unforgettable outdoor experiences. Discover all sorts of options for your next adventure!</p>
                        <Link to="/explore"><Button className="btn">Find your perfect adventure</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityDisplay;