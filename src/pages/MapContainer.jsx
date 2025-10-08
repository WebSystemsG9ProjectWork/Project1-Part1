import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 37.65674155384669,
  lng: -122.05619875493439,
};

const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}`;
    window.open(googleMapsUrl, "_blank");
  };

function MapContainer() {
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} onClick={handleMapClick}/>
    </GoogleMap>
  );
}

export default React.memo(MapContainer);
