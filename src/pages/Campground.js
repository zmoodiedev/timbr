import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import Button from "../components/common/button";
import CampPhotos from '../components/layout/campPhotos';
import AmenityList from "../components/AmenityList";
import amenities from "../components/amenities";
import ActivityList from "../components/activityList";
import activities from "../components/activities";
import ReviewGrid from "../components/reviewGrid";*/

import '../styles/campground.css';

const Campground = () => {

  const { campgroundId } = useParams();
  const [campground, setCampground] = useState(null);

  useEffect(() => {
    const fetchCampground = async () => {
      const docRef = doc(db, "campgrounds", campgroundId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCampground(docSnap.data());
      } else {
        console.log('No such campground!');
      }
    };

    fetchCampground();
  }, [campgroundId]);

  return (
    <div className="container">
      {campground ? (
        <div>
          <h1>{campground.name}</h1>
          {/* Render other details of the campground */}
          <p>{campground.description}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>Loading campground details...</p>
      )}
    </div>           
  )
}

export default Campground;