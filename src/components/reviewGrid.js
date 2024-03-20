import React, { useEffect, useState } from 'react';
import PaginatedContent from './common/PaginatedContent';
import fetchReviews from '../hooks/fetchReviews';

import Popup from 'reactjs-popup';
import SubmitReview from './submitReview';
import Loader from './common/loader';
import Review from './review';
import '../styles/reviewgrid.css';

const ReviewGrid = ({ campgroundId, review }) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        <PaginatedContent
            items={reviews}
            itemsPerPage={4}
            renderContent={(displayedReviews) => (
                <div className="review-grid">
        
                    { (reviews.length > 0) ? (
                        <>
                            <div className="reviews">
                                {displayedReviews.map(review => (
                                    <Review key={review.id} username={review.username} review={review} className="review" />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="noReviews">
                            <p>There are no reviews for this campground yet. Why not be the first?</p>
                            <Popup trigger={<button className="btn">Submit a review</button>} position="center center" modal ={true} className="submit-review">
                            <SubmitReview />
                        </Popup>
                        </div>
                    )}
            
                </div>
            )}
        />
    );
};

export default ReviewGrid;