import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import Loader from "../components/common/loader";
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
    <div className="page-container">
      {campground ? (
        <>
        <div className="cg-header">
          <h1>{campground.name}</h1>
          <div className='cg-interactions'>
            <Button className="btn">Submit a review</Button>
            <Button className="share"><FontAwesomeIcon icon={faShareNodes} /></Button>
            <Button className="favorite"><FontAwesomeIcon icon={faHeart} /></Button>
          </div>
        </div>
        <CampPhotos />
        <div className="cg-details">
          <div className="cg-details-l">
            <p>{campground.description}</p>
            <div className="cg-icons">
              <div className='cg-amenities'>
                <h3>Amenities</h3>
                <AmenityList amenities={amenities} className="cg-available-amenities" />
              </div>
              <div className='cg-activities'>
                <h3>Activities</h3>
                <AmenityList amenities={amenities} className="cg-available-activities" />
              </div>
            </div>
            <hr />
            <ReviewGrid />
          </div>
          <div className="cg-details-r"></div>
        </div>
        </>

      ) : (
        <><Loader /></>
      )}
    </div>           
  )
}

export default Campground;