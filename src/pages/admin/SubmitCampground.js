import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Navigate } from 'react-router-dom';
import timbrIcon from '../../assets/images/icon-tmbr.png';
import ReactSlider from 'react-slider';
import amenitiesMap from "../../utilities/amenitiesMap";
import activitiesMap from "../../components/activitiesMap";
import Button from "../../components/common/button";

import "../../styles/submitCamp.css"

export default function SubmitCampground() {

    const [campground, setCampground] = useState({
        name: '',
        images: [],
        amenities: [],
        activities: [],
        description: '',
        location: { latitude: '', longitude: '' },
        priceRange: [0, 200],
        phoneNumber: '',
        website: ''
    });


    const handleSliderChange = (value) => {
        setCampground(prevState => ({
            ...prevState,
            priceRange: value
        }));
    };

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
                location,
            };
            // Adjust this if your data needs to be transformed before sending
            const imageUrls = await uploadImages(campground.images);
            await saveCampgroundData(campground, imageUrls);
            const docRef = await addDoc(campgroundsColRef, newCampground);
            console.log("Document written with ID: ", docRef.id);

            Navigate('/campground/' + docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const uploadImages = async (images) => {
        const storage = getStorage();
        const uploadPromises = images.map((image, index) => {
            const storageRef = ref(storage, `campgrounds/${Date.now()}_${index}`);
            return uploadBytes(storageRef, image).then(snapshot => getDownloadURL(snapshot.ref));
        });

        return Promise.all(uploadPromises);
    };

    const saveCampgroundData = async (campgroundData, imageUrls) => {
        const campgroundsColRef = collection(db, "campgrounds");
        
        const newCampgroundData = {
            ...campgroundData,
            images: imageUrls
        };
        console.log("Data being sent to Firestore:", newCampgroundData);
        return addDoc(campgroundsColRef, newCampgroundData);
    };

    return (
        <div id="campSubmit">
            <div className="cg-submit-wrap">

                <div className="cg-submit-l">
                    <img src={timbrIcon} alt="tmbr Logo" className="tmbr-icon" />
                    <h1>Submit a Campground</h1>
                    <p>Have a hidden gem or a favorite spot? We're always looking to grow our collection of amazing campgrounds. Share details about your favorite camping locations and help other adventurers discover new places to explore. Submitting is easy – just fill in the information here. Whether it's a well-known park or an off-the-beaten-path escape, your contributions make <span className="highlight">tmbr</span> the go-to resource for outdoor enthusiasts like you!</p>
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
                                            title={amenity.name}
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
                                    title={activity.name}
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
                            <label htmlFor="price-range">Price Range</label>
                            <ReactSlider
                                name="price-range"
                                className="horizontal-slider"
                                thumbClassName="thumb"
                                trackClassName="track"
                                value={campground.priceRange}
                                onChange={handleSliderChange}
                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                renderThumb={(props, state) => <div {...props}><div className="price-label">{state.valueNow}</div></div>}
                                pearling
                                minDistance={10}
                            />

                            <div>Selected range: <span className="dol">$</span>{campground.priceRange[0]} - <span className="dol">$</span>{campground.priceRange[1]}</div>
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