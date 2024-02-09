import React from "react";
import Button from "../components/common/button"
import { Link } from 'react-router-dom';
import '../styles/activityDisplay.css';

const ActivityDisplay = () => {
    return (
        <div id="activityDisplay">
            <div className="container display-wrap">
                <div className="display-l">
                    <div className="activity-grid">
                        <div className="activity-box hiking"><h3>Hiking</h3></div>
                        <div className="activity-box swimming"><h3>Swimming</h3></div>
                        <div className="activity-box fishing"><h3>Fishing</h3></div>
                        <div className="activity-box biking"><h3>Biking</h3></div>
                        <div className="activity-box canoeing"><h3>Canoeing</h3></div>
                        <div className="activity-box golfing"><h3>Golfing</h3></div>
                    </div>
                </div>
                <div className="display-r">
                    <div className="signup-call">
                        <h2>Campgrounds For<br/>Every Type of Camper!</h2>
                        <p>Keep track of your favorite camping spots, share your thoughts with other campers, and get discounts from our partners!</p>
                        <Link to="/auth/signup"><Button className="btn">Sign up</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityDisplay;