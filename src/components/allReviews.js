import React, { useEffect, useState } from 'react';
import fetchReviews from '../hooks/fetchReviews';
import Review from './review';

const AllReviews = ({campgroundId}) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getReviews = async () => {
            setIsLoading(true);
            try {
                const fetchedReviews = await fetchReviews(campgroundId);
                setReviews(fetchedReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (campgroundId) {
            getReviews();
        }
    }, [campgroundId]);

    return (
        <div className="review-grid">
           <div className="reviews">
                    {reviews.map(review => (
                        <Review key={review.id} username={review.username} review={review} className="review" />
                    ))}
                </div>
        </div>
    )
}

export default AllReviews;