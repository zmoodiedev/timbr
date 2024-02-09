import React from "react";
import Button from "./common/button";

function AdSpaceCard() {
    return (
        <div id="adSpaceCard">
            <h3>Save on Supplies</h3>
            <p>Members get special deals on products and services from our partners!</p>
            <Button className='simple-btn'>Get the offers</Button>
        </div>
    );
};

export default AdSpaceCard;