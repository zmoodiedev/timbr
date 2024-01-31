import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from 'react-router-dom';
import Review from './review';
import '../styles/reviewgrid.css';

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "reviews"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
    return data;
}

function ReviewGrid() {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setReviewData(data);
        }
        fetchData();
    }, []);

    console.log(reviewData);

    return (
        <div className="review-grid-wrap">
            <h2>Reviews</h2>
            <div id="reviewGrid">
            {reviewData[0] ? (
                <div id="cardGrid">
                    {reviewData.map((review) => (
                    <Link to={`/campground/${review.id}`} key={review.id}>
                        <Review
                            id={review.id}
                            rating={review.rating}
                            review={review.reviewContent}
                        />
                    </Link>
                ))}</div>
            ) : (<p>There are no reviews currently listed.</p>)}
            </div>

        </div>
    );
};


export default ReviewGrid;