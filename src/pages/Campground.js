import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import Loader from "../components/common/loader";
import CampgroundHeader from "../components/campHeader";
import CampPhotos from '../components/campPhotos';
import AmenityIcons from '../utilities/AmenityIcons';
import amenitiesMap from "../utilities/amenitiesMap";
import ActivityIcons from '../utilities/ActivityIcons';
import activitiesMap from "../utilities/activitiesMap";
import ReviewGrid from "../components/reviewGrid";
import CampMap from '../components/campMap';
import CampContact from '../components/campContact';

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
        <CampgroundHeader name={campground.name} />
        <CampPhotos images={campground.images} />
        <div className="cg-details">
          <div className="cg-details-l">
            <div className="cg-description">
              <p>{campground.description}</p>
            </div>
            <div className="cg-icons">
              <div className='cg-amenities'>
                <h3>Amenities</h3>
                <AmenityIcons amenities={campground.amenities} amenitiesMap={amenitiesMap} />
              </div>
              <div className='cg-activities'>
                <h3>Activities</h3>
                  <ActivityIcons activities={campground.activities} activitiesMap={activitiesMap} />
              </div>
            </div>
            <hr />
            <ReviewGrid />
          </div>
          <div className="cg-details-r">
            <CampMap />
            <CampContact priceRange={campground.priceRange} phone={campground.phone} website={campground.website} />
          </div>
        </div>
        </>

      ) : (
        <><Loader /></>
      )}
    </div>           
  )
}

export default Campground;