import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import amenitiesMap from "../../components/amenitiesMap";
import activitiesMap from "../../components/activitiesMap";
import Button from "../../components/common/button";
import timbrIcon from '../../assets/images/icon-tmbr.png';

import "../../styles/submitCamp.css"

// Add a new document with a generated id.
/*const docRef = await addDoc(collection(db, "campgrounds"), {
    name: "Testing Publish",
    description: "This is a test"
  });
  console.log("Document written with ID: ", docRef.id);*/


export default function SubmitCampground() {

    const [campground, setCampground] = useState({
        name: '',
        images: [], // Assuming an array of file objects
        amenities: [], // Array of selected amenities
        activities: [], // Array of selected activities
        description: '',
        location: { latitude: '', longitude: '' },
        price: '',
        phoneNumber: '',
        website: ''
    });

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === 'file') {
            setCampground({...campground, images: [...files]});
        } else if (type === 'checkbox') {
            // Handle checkbox changes (for amenities and activities)
        } else {
            setCampground({...campground, [name]: value});
        }
    };

    const handleIconClick = (type, name) => {
        setCampground(prevState => ({
            ...prevState,
            [type]: prevState[type].includes(name) 
                ? prevState[type].filter(item => item !== name) // Remove if already selected
                : [...prevState[type], name] // Add if not selected
        }));
    };

    // Form submission handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        const campgroundsColRef = collection(db, "campgrounds");

        try {
            const location = {
                latitude: campground.location.latitude,
                longitude: campground.location.longitude
            };

            const newCampground = {
                ...campground,
                location
            };
            // Adjust this if your data needs to be transformed before sending
            const docRef = await addDoc(campgroundsColRef, newCampground);
            console.log("Document written with ID: ", docRef.id);

            // Optional: Clear form or give user feedback
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div id="campSubmit">
            <div className="page-container cg-submit-wrap">

                <div className="cg-submit-l">
                    <img src={timbrIcon} alt="tmbr Icon" className="tmbr-icon" />
                    <h1>Submit a Campground</h1>
                    <p>Have a hidden gem or a favorite spot? We're always looking to grow our collection of amazing campgrounds. Share details about your favorite camping locations and help other adventurers discover new places to explore. Submitting is easy – just fill in the information here. Whether it's a well-known park or an off-the-beaten-path escape, your contributions make <span class="tmbr-ref">tmbr</span> the go-to resource for outdoor enthusiasts like you!</p>
                </div>
                <div className="cg-submit-r">
                

                    <form onSubmit={handleSubmit} className="campground-form">

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" onChange={handleChange} className="form-control" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" onChange={handleChange} className="form-control" required></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="amenities">Amenities <span className="light-note"> - Select all that are available</span></label>
                        
                            <div className="icon-group">
                                    {amenitiesMap.map((amenity, index) => (
                                        <div 
                                            key={index} 
                                            className={`icon ${campground.amenities.includes(amenity.name) ? 'selected' : ''}`}
                                            onClick={() => handleIconClick('amenities', amenity.name)}
                                        >
                                            <amenity.icon />
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="activities">Activities<span className="light-note"> - Select all that are available</span></label>
                            <div className="icon-group">
                                
                                {activitiesMap.map((activity, index) => (
                                <div 
                                    key={index} 
                                    className={`icon ${campground.activities.includes(activity.name) ? 'selected' : ''}`}
                                    onClick={() => handleIconClick('activities', activity.name)}
                                >
                                    <activity.icon />
                                </div>
                                ))}
                            </div>
                        </div>

                        <div className="form-group split">
                            <div className="form-half">
                                <label htmlFor="location.latitude">Latitude</label>
                                <input className="form-control" type="text" name="location.latitude" onChange={handleChange} />
                            </div>
                            <div className="form-half">
                                <label htmlFor="location.longitude">Longitude</label>
                                <input className="form-control" type="text" name="location.longitude" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price Range</label>
                            <input className="form-control" type="number" name="price" onChange={handleChange} />
                        </div>

                        <div className="form-group split">
                            <div className="form-half">
                                <label>Phone Number</label>
                                <input className="form-control" type="tel" name="phoneNumber" onChange={handleChange} />
                            </div>
                            <div className="form-half">
                                <label>Website</label>
                                <input className="form-control" type="url" name="website" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="images">Images</label>
                            <input type="file" name="images" multiple onChange={handleChange} className="form-control" />
                        </div>

                        <Button type="submit" className="btn">Add Campground</Button>
                    </form>
                </div>
            </div>
        </div>
    )
};