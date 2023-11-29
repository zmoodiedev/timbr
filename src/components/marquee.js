import React from 'react';

import '../styles/marquee.css';

function Marquee() {
    return (
        <div id="marquee">
            <span id="mainTag">Discover Your Next Adventure</span>
            <span id="secondaryTag">Explore, Connect, and Unwind in the Great Outdoors</span>
            <div id="campSearch">
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" />
                </form>
            </div>
        </div>
    );
};

export default Marquee;