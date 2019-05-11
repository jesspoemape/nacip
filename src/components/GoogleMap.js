import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
    const extraProps = {
        center: {
            lat: 40.749780,
            lng: -111.873970,
        },
        zoom: 11,
        style: {
            width: '100%',
            height: '300px',
        },
    };
    return (
            <Map
                google={props.google}
                {...extraProps}
                className="googleMapWrapper"
            >
                <Marker />
            </Map>
    );

}

export default GoogleApiWrapper({
    apiKey: (process.env.GOOGLE_MAPS_API_KEY)
})(GoogleMap);
