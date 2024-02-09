import React from "react";
import Button from "./common/button";

function TipsCard() {
    return (
        <div id="tipsCard">
            <h3>Get Camping Tips</h3>
            <p>Check out various tips for your camping trip. From starting a fire to cook and keep warm, to properly storing your food.</p>
            <Button className="simple-btn">Get the tips</Button>
        </div>
    );
};

export default TipsCard;