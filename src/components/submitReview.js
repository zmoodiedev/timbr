import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { useParams } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import Button from './common/button';
import Rating from '../hooks/rating';
import '../styles/submitReview.css';

const SubmitReview = ({}) => {

    const { name } = useParams();

    const [review, setReview] = useState({
        uid: '',
        name: '',
        campgroundId: '',
        rating: 0,
        reviewContent: ''
    });
    console.log(name);

    const handleChange = (event) => {
        const { rating, value, review, tripStart, tripEnd } = event.target;
        
        setReview({...review, [rating]: value, tripStart, tripEnd});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const campgroundsRevRef = collection(db, "reviews");
        
        try {
            const newReview = {
                ...review
            };

            // Adjust this if your data needs to be transformed before sending
            const docRef = await addDoc(campgroundsRevRef, newReview);
            console.log("Document written with ID: ", docRef.id);

            // Optional: Clear form or give user feedback
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div id="submitReview">
            <h2>Help Others Discover the Perfect Campsite!</h2>
            <p><span className="highlight">Your insights matter!</span> By sharing your review, you play a crucial role in guiding fellow campers to find the quality of campground they're searching for. From serene settings to adventurous landscapes, your experiences help paint a vivid picture of what to expect.</p>
            <hr/>
            <div className="camp-details">
                <h2>{name}</h2>

            </div>
            <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                    <h3>Rate Your Stay</h3>
                    <label htmlFor="rating">Rate</label>
                    <Rating value={review.rating} />
                </div>

                <div className="form-group">
                    <h3>Date of Your Stay</h3>
                    <label htmlFor="rating">Start Date</label>
                    <input type="date" id="startDate" name="tripStart" onChange={handleChange} min="2024-01-01" max="2024-12-31" />
                    <label htmlFor="rating">End Date</label>
                    <input type="date" id="endDate" name="tripEnd" onChange={handleChange} min="2024-01-01" max="2024-12-31" />
                </div>

                <div className="form-group">
                    <label htmlFor="reviewContent">Your Review</label>
                    <textarea name="reviewContent" onChange={handleChange} className="form-control" required></textarea>
                </div>

                <Button type="submit" className="btn">Submit Review</Button>
            </form>
        </div>
    )
};

export default SubmitReview;