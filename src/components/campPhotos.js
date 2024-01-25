import React from 'react';
import '../styles/campPhotos.css';

const CampPhotos = ({ images }) => {
    return (
        <div id="campPhotos">
            {images && (
                <>
                    {images.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Campground ${index + 1}`} className={`photo-${index + 1}`} />
                    ))}
                    {[...Array(5 - images.length)].map((_, index) => (
                        <div key={`default-${index}`} className={`empty-photo photo-${images.length + index + 1}`} />
                    ))}
                </>
            )}
        </div>
    );
};

export default CampPhotos;