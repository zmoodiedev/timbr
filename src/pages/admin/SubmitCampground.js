import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import AmenityList from "../../components/AmenityList";

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
    
    // For checkboxes
    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        if (checked) {
            setCampground({...campground, [name]: [...campground[name], value]});
        } else {
            setCampground({...campground, [name]: campground[name].filter(item => item !== value)});
        }
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
        <div className="page-container">
            <h1>Submit a Campground</h1>

            <form onSubmit={handleSubmit} className="campground-form">

                <div className="form-group">
                    <label>Name: <input type="text" name="name" onChange={handleChange} className="form-control" /></label>
                </div>

                <div className="form-group">
                    <label>Images: <input type="file" name="images" multiple onChange={handleChange} className="form-control" /></label>
                </div>

                <div className="form-group">
                    <label>Description: <textarea name="description" onChange={handleChange} className="form-control"></textarea></label>
                </div>

                <div className="form-group">
                    <label>Latitude: <input type="text" name="location.latitude" onChange={handleChange} /></label>
                    <label>Longitude: <input type="text" name="location.longitude" onChange={handleChange} /></label>
                </div>

                <div className="form-group">
                    <label>Price: <input type="number" name="price" onChange={handleChange} /></label>
                </div>

                <div className="form-group">
                    <label>Phone Number: <input type="tel" name="phoneNumber" onChange={handleChange} /></label>
                </div>

                <div className="form-group">
                    <label>Website: <input type="url" name="website" onChange={handleChange} /></label>
                </div>

                <button type="submit" className="submit-btn">Add Campground</button>
            </form>

                
                
                
                
                

        </div>
    )
};