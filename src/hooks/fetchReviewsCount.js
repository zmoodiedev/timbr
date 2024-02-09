import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const fetchUserReviewsCount = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        console.log("No user logged in");
        return 0;
    }

    const reviewsRef = collection(db, "reviews");
    const q = query(reviewsRef, where("uid", "==", user.uid));

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.length; // The count of reviews
    } catch (error) {
        console.error("Error fetching user reviews count: ", error);
        return 0;
    }
};

export default fetchUserReviewsCount;