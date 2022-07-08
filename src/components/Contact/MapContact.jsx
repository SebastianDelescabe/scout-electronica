import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1120px',
  height: '420px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export const MapContact = () => {
  return (
    <div style={{width:'200px'}}>

      <LoadScript
        googleMapsApiKey="AIzaSyDIkMFGwMkJJ3U7Y1-enbTpt5VdpTEfXS8"
      >
        <GoogleMap
          // mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
