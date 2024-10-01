import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loader from "../components/common/loader";
import CampgroundHeader from "../components/campHeader";
import CampPhotos from '../components/campPhotos';
import AmenityIcons from '../utilities/AmenityIcons';
import amenitiesMap from "../utilities/amenitiesMap";
import ActivityIcons from '../utilities/ActivityIcons';
import activitiesMap from "../utilities/activitiesMap";
import ReviewGrid from "../components/reviewGrid";
import LocationMap from '../components/locationMap';
import CampContact from '../components/campContact';

import '../styles/campground.css';

const Campground = () => {

  const { id } = useParams();
  const [campground, setCampground] = useState(null);
  

  useEffect(() => {
    const fetchCampground = async () => {
      const db = getFirestore();
      const campgroundRef = doc(db, "campgrounds", id);
      
      console.log(`Attempting to fetch campground with ID: ${id}`); // Log the ID being used
      const docSnap = await getDoc(campgroundRef);
      if (docSnap.exists()) {
          console.log("Campground data:", docSnap.data()); // Log fetched data
          setCampground(docSnap.data());
      } else {
          console.log("This campground does not exist.");
      }
  };

    fetchCampground();
}, [id]);

  if (!campground) {
    return <Loader />;
  }

    const { latitude, longitude } = campground.location || {};
    const latNum = parseFloat(latitude);
    const lngNum = parseFloat(longitude);


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
            <h3>Reviews</h3>
            <ReviewGrid campgroundId={id} />
          </div>
          <div className="cg-details-r">
          
            {(!isNaN(latNum) || !isNaN(lngNum)) ? (
              <LocationMap lat={latNum} lng={lngNum} />
            ) : (    
              <></> 
            )}
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