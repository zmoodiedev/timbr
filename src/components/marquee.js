import React from 'react';
import Search from './search';
import TreesDivider from '../components/common/treesDivider';

import '../styles/marquee.css';

function Marquee() {
    return (
        <div id="marquee">
            <span id="mainTag">Discover Your Next Adventure</span>
            <span id="secondaryTag">Explore, Connect, and Unwind in the Great Outdoors</span>
            <Search />
            <TreesDivider />
        </div>
    );
};

export default Marquee;