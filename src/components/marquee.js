import React from 'react';
import Search from './search';
import BottomDivider from './common/bottomDivider';
import { Parallax } from 'react-scroll-parallax';
import Hiker from '../assets/images/hiker.png';


import '../styles/marquee.css';

function Marquee() {
    return (
        <div id="marquee">
            <Parallax translateY={['200px', '275px']}>
                <div id="campBlob"></div>
            </Parallax>
            <div className="marquee-tag container">
                <div className="marquee-left">
                    <span id="mainTag">Discover Your<br/>Next Adventure</span>
                    <span id="secondaryTag">Explore, Connect, and Unwind in the Great Outdoors</span>
                    <Search />
                </div>
                
                <div className="marquee-right">     
                    <Parallax translateY={['-200px', '125px']}  speed={10}>
                        <img src={Hiker} alt="Hiker" className="hiker" />
                    </Parallax>
                </div>
            </div>
            <BottomDivider />
        </div>
    );
};

export default Marquee;