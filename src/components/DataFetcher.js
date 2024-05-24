// DataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useHistory } from 'react-router-dom';

const DataFetcher = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState(null); // State for current date
  const mapContainerId = 'map';
  const [map, setMap] = useState(null);
  const [markerLayer, setMarkerLayer] = useState(null);
  
  const history = useHistory();
  window.history.pushState(null, '', '/DataFetcher');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://yash1722.pythonanywhere.com/getCoordinates');
        setCoordinates(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  

  

  useEffect(() => {
    // Get the current date when the component mounts
    const currentDate = new Date();
    setCurrentDate(currentDate.toDateString());
  }, []);

  useEffect(() => {
    
    if (map && selectedCoordinate) {
      const { latitude, longitude } = selectedCoordinate;
      map.setView([latitude, longitude], 8);

      if (markerLayer) {
        markerLayer.clearLayers();
        const customMarkerIcon = new L.Icon({
          iconUrl: process.env.PUBLIC_URL + '/marker.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });
        L.marker([latitude, longitude], { icon: customMarkerIcon }).addTo(markerLayer);
      }
    }
  }, [map, selectedCoordinate, markerLayer]);

  
  const initializeMap = () => {
    if (!map) {
      const mapInstance = L.map(mapContainerId).setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance);
      setMap(mapInstance);

      const markerLayerInstance = L.layerGroup().addTo(mapInstance);
      setMarkerLayer(markerLayerInstance);
    }
  };

  
  

  const handleViewMap = (index) => {
    initializeMap();
    setSelectedCoordinate(coordinates[index]);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    history.push('/Login');
    localStorage.clear(); // Clear any authentication data
    history.replace('/Login');
  };


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="logoutButtonContainer">
        <button className="logoutButton" onClick={handleLogout}>
          Logout
        </button>
      </div>
  
      <div className="dataFetcherContainer">
        <div className="tableContainer">
          <h3>
            Dashboard &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Total Cases({coordinates.length}) &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; Date:{currentDate}
          </h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>View on Map</th>
                
                {/* Remove the "Additional Action" column header */}
              </tr>
            </thead>
            <tbody>
              {coordinates.map((coordinate, index) => (
                <tr key={coordinate._id}>
                  <td>{coordinate.name}</td>
                  <td>{coordinate.latitude}</td>
                  <td>{coordinate.longitude}</td>
                  <td>
                    <button onClick={() => handleViewMap(index)}>
                      View on Map
                    </button>
                  </td>
                  {/* Remove the "Send Alert" button */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="mapContainer">
          <div id={mapContainerId} className="map" />
        </div>
      </div>
    </div>
  );
              };  

export default DataFetcher;