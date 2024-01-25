import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import Loader from "../components/common/loader";
import CampgroundHeader from "../components/campHeader";
import CampPhotos from '../components/campPhotos';
import AmenityIcons from '../utilities/AmenityIcons';
import amenitiesMap from "../utilities/amenitiesMap";
import activitiesMap from "../components/activitiesMap";
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

  // Function to match amenities from Firebase to icons
  const getActivityIcons = (activityNames) => {
    return activityNames.map(name => {
        const matchedActivity = activitiesMap.find(activity => activity.name === name);
        return matchedActivity ? matchedActivity.icon : null;
    }).filter(icon => icon !== null);
  };

  
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
                <div className='cg-available-activities'>
                  {getActivityIcons(campground.activities).map((Icon, index) => (
                      <Icon key={index} className="activity-icon" title={campground.activities[index]} />
                  ))}
                </div>
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