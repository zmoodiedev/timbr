import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const useFetchUserData = (username) => {
    const [userProfile, setUserProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userFound, setUserFound] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) {
            setIsLoading(false);
            setUserFound(false);
            return;
        }

        const fetchUserData = async () => {
            setIsLoading(true);
            setError(null);

            const usersRef = collection(db, "users");
            const q = query(usersRef, where("username", "==", username));

            try {
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    setUserProfile(querySnapshot.docs[0].data());
                    setUserFound(true);
                } else {
                    setUserProfile(null);
                    setUserFound(false);
                }
            } catch (err) {
                console.error("Error fetching user data: ", err);
                setError(err);
                setUserProfile(null);
                setUserFound(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [username]);

    return { userProfile, isLoading, userFound, error };
};

export default useFetchUserData;