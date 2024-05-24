// LeafletMap.js
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ initialCoordinates }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    // Map initialization
    const mapInstance = L.map('map').setView(initialCoordinates, 8);

    // OSM layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    // Marker initialization with a custom image
    const customMarkerIcon = new L.Icon({
      iconUrl: process.env.PUBLIC_URL + '/marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    // Marker initialization with the custom icon
    const markerInstance = L.marker(initialCoordinates, { icon: customMarkerIcon }).addTo(mapInstance);

    setMap(mapInstance);
    setMarker(markerInstance);

    // Cleanup on component unmount
    return () => {
      mapInstance.remove();
    };
  }, [initialCoordinates]);

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default LeafletMap;
