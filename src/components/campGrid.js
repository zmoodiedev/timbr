import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from 'react-router-dom';
import CampCard from './common/campCard';

import '../styles/cardgrid.css';

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "campgrounds"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
    return data;
}

const CampGrid = () => {

    const [campgroundData, setCampgroundData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setCampgroundData(data);
        }
        fetchData();
    }, []);

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    } 


    return (
        <div className="container card-grid-wrap">
            
            {campgroundData[0] ? (
                <div id="cardGrid">
                    {shuffle(Array.from(campgroundData)).slice(0, 4).map((campground) => (
                    <Link to={`/campground/${campground.id}`} key={campground.id}>
                        <CampCard
                            id={campground.id}
                            image={campground.images ? campground.images[0] : '../assets/images/defaultImg.jpg'}
                            name={campground.name}
                            priceRange={campground.priceRange}
                        />
                    </Link>
                ))}</div>
            ) : (<p>There are no campgrounds currently listed.</p>)}
            
        </div>
    );
};


export default CampGrid;