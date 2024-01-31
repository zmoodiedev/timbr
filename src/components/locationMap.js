import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import MapStyles from '../styles/mapStyles';

import '../styles/campMap.css';

const LocationMap = ({ lat, lng }) => {
    const containerStyle = {
        width: '100%',
        height: '300px',
        borderRadius: '.8em',
        marginBottom: '2em'
    };

    const center = {
        lat: lat,
        lng: lng
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDTXN9SmZ0GlNlpyj34urOuyCFhxgYuzec"
        >
        <h2>Location</h2>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                className="camp-map"
                options={{
                    gestureHandling: "greedy",
                    disableDefaultUI: true,
                    styles: MapStyles
                }}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default LocationMap;