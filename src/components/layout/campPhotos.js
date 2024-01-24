import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import '../../styles/campPhotos.css';

const CampPhotos = () => {

    const [campground, setCampground] = useState(null);
    const { campgroundId } = useParams();

    useEffect(() => {
        const fetchCampground = async () => {
            const docRef = doc(db, "campgrounds", campgroundId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setCampground(docSnap.data());
            } else {
                console.log("No such campground!");
            }
        };

        fetchCampground();
    }, [campgroundId]);

    return (
        <div id="campPhotos">
         {campground && campground.images && (
        <>
            {campground.images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Campground ${index + 1}`} className={`photo-${index + 1}`} />
            ))}
            {[...Array(5 - campground.images.length)].map((_, index) => (
                <div key={`default-${index}`} className={`empty-photo photo-${campground.images.length + index + 1}`} />
            ))}
        </>
        )}
        </div>
    );
};

export default CampPhotos;