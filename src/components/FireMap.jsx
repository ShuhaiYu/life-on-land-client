import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

const FireHeatMap = ({ points }) => {
  const mapRef = useRef(null); // Reference to the map instance

  useEffect(() => {
    if (mapRef.current !== null && points.length > 0) {
      

      const map = L.map(mapRef.current, {
        center: [-33.8688, 151.2093], // Sydney coordinates
        zoom: 7,
        maxZoom: 10,
        minZoom: 3
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Define a color gradient for the heatmap
      const colorGradient = {
        0.4: 'yellow',
        0.65: 'orange',
        1: 'darkred'
      };

      // Add the heat layer with custom gradient
      const heatLayer = L.heatLayer(points, {
        radius: 25,
        gradient: colorGradient
      }).addTo(map);

      return () => {
        map.remove(); // Cleanup map on component unmount
      };
    }
  }, [points]); // Dependency array ensures this runs after `points` are set

  return <div ref={mapRef} style={{ height: '400px', width: '100%', zIndex: 10 }}></div>;
};

export default FireHeatMap;
