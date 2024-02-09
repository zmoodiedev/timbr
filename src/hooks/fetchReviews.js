import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const fetchReviews = async (campgroundId) => {
    const reviewsRef = collection(db, "reviews");
    const q = query(reviewsRef, where("campgroundId", "==", campgroundId));  
    
    try {
        const querySnapshot = await getDocs(q);
        const reviews = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return reviews;
    } catch (error) {
        console.error("Error fetching reviews: ", error);
        return [];
    }
};

export default fetchReviews;