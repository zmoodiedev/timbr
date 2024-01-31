import React, { useState } from "react";
import Button from './common/button';
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import '../styles/submitReview.css';

const SubmitReview = ({name}) => {

    const [review, setReview] = useState({
        uid: '',
        campgroundId: '',
        rating: 0,
        reviewContent: ''
    });

    const handleChange = (event) => {
        const { rating, value, review } = event.target;
        
        setReview({...review, [rating]: value});
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
            <h2>Submit A Review</h2>
            <h3>{name}</h3>
            <form onSubmit={handleSubmit} className="review-form">

                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input type="text" name="rating" onChange={handleChange} className="form-control" required />
                </div>

                <div className="form-group">
                    <label htmlFor="reviewContent">Review</label>
                    <textarea name="reviewContent" onChange={handleChange} className="form-control" required></textarea>
                </div>

                <Button type="submit" className="btn">Submit Review</Button>
            </form>
        </div>
    )
};

export default SubmitReview;