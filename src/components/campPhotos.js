import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
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
                        <div key={`default-${index}`} className={`empty-photo photo-${images.length + index + 1}`}><FontAwesomeIcon className="img-camera" icon={faCamera} title="Submit Photos" /></div>
                    ))}
                </>
            )}
        </div>
    );
};

export default CampPhotos;