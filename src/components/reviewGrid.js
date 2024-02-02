import React, { useEffect, useState } from 'react';
import fetchReviews from '../hooks/fetchReviews';
import Loader from './common/loader';
import Button from './common/button';
import Review from './review';
import '../styles/reviewgrid.css';

const ReviewGrid = ({ campgroundId }) => {
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

    if (isLoading) return <Loader />;

    return (
        <div id="reviewGrid">
        { (reviews.length > 0) ? (
            <>
                {reviews.map(review => (
                    <Review key={review.id} username={review.username} review={review} />
                ))}
            </>

            ) : (
                <div className="noReviews">
                    <p>There are no reviews for this campground yet. Why not be the first?</p>
                    <Button className="btn">Be number one!</Button>
                </div>
            )}
        </div>
    );
};

export default ReviewGrid;