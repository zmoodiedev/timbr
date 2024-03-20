import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Loader from './common/loader';
import CampCard from './campCard';

import '../styles/campGrid.css';

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "campgrounds"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
    return data;
    
}

const CampGrid = ({ campgrounds, limit }) => {

    const [campgroundData, setCampgroundData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const displayedItems = campgroundData.slice(0, limit);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setCampgroundData(data);
            setIsLoading(false);
        }
        fetchData();
        
    }, []);

    if (isLoading) return <Loader />;

    return (
        <>
            
            {campgroundData[0] ? (
                <div id="campGrid">
                    <div className="card-grid-wrap">
                        {displayedItems.map((campground, index) => (
                                <CampCard
                                    key={index}
                                    id={campground.id}
                                    image={campground.images ? campground.images[0] : '../assets/images/defaultImg.jpg'}
                                    name={campground.name}
                                    priceRange={campground.priceRange}
                                />
                        ))}
                    </div>
                </div>
            ) : (<p>There are no campgrounds currently listed.</p>)}
            
        </>
    );
};


export default CampGrid;