import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import Button from "../components/common/button";
import CampPhotos from '../components/layout/campPhotos';
import AmenityList from "../components/AmenityList";
import amenities from "../components/amenities";
import ActivityList from "../components/activityList";
import activities from "../components/activities";
import ReviewGrid from "../components/reviewGrid";

import '../styles/campground.css';




const Campground = () => {

    const { campgroundId } = useParams();
    const [ campgroundData, setCampgroundData ] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        const db = getFirestore();
        const docRef = doc(db, 'campgrounds', campgroundId);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setCampgroundData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      };
  
      fetchData();
    }, [campgroundId]);

    return (
        <div className="container">
                 {campgroundData ? (
        <div>
          {/* Render your document data here */}
          <h1>{campgroundData.title}</h1>
          {/* other document details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
                
    )
}

export default Campground;