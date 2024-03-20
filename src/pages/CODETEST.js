import React from 'react';
import Button from '../components/common/button';
import placeholder from '../assets/images/campgrounds/alberta-beach/alberta-beach_02.jpg';
import '../styles/testStyles.css';


const CodeTest = () => {

    return (
        <>
            <div className='page-container'>
            <div className="card-grid">
                <div className="card">
                    <div className="card-bg">
                        <img src={placeholder} alt="" />
                    </div>
                    <div className='card-content'>
                        <span class="category">Glamping</span>
                        <span class="name">Alberta Beach</span>
                        <Button className="btn">Visit</Button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-bg">
                        <img src={placeholder} alt="" />
                    </div>
                    <div className='card-content'>
                        <span class="category">Glamping</span>
                        <span class="name">Alberta Beach</span>
                        <Button className="btn">Visit</Button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-bg">
                        <img src={placeholder} alt="" />
                    </div>
                    <div className='card-content'>
                        <span class="category">Glamping</span>
                        <span class="name">Alberta Beach</span>
                        <Button className="btn">Visit</Button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-bg">
                        <img src={placeholder} alt="" />
                    </div>
                    <div className='card-content'>
                        <span class="category">Glamping</span>
                        <span class="name">Alberta Beach</span>
                        <Button className="btn">Visit</Button>
                    </div>
                </div>
                </div>
            </div>    
        </>
    );
};


export default CodeTest;