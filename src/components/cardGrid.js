import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
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

function CardGrid() {

    const [campgroundData, setCampgroundData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setCampgroundData(data);
        }
        fetchData();
    }, []);


    return (
        <div className="container card-grid-wrap">
            <div id="cardGrid">

            {campgroundData.map((campground) => (
                <CampCard id={campground.id} name={campground.name} price={campground.price} />
            ))}

                
            </div>
        </div>
    );
};


export default CardGrid;