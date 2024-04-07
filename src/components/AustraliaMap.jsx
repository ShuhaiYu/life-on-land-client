import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AustraliaMap = ({ location }) => {
  // create a reference to the map
  const mapRef = useRef(null);

  // useEffect hook to render the map
  useEffect(() => {
    if (!mapRef.current || !location) return;
    const map = L.map(mapRef.current, {
      center: [-26.6980, 133.8807], // Australia center coordinates
      zoom: 3,
      zoomControl: false, // disable zoom control
      scrollWheelZoom: false, // disable scroll zoom
      dragging: false, // disable dragging
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // use fetch to get the GeoJSON data
    fetch('/data/states.min.geojson')
      .then(response => response.json())
      .then(data => {
        L.geoJson(data, {
          style: (feature) => {
            // transform location string to an array of state names
            const stateNames = location.includes(',') 
              ? location.split(', ').map(code => mapStateCodeToName(code))
              : [mapStateCodeToName(location)];
            
            // based on the state name, set the color and opacity
            if (stateNames.includes(feature.properties.STATE_NAME)) {
              return { color: '#000', fillColor: '#222', fillOpacity: 0.7 };
            }
            return { color: '#000', fillColor: '#fff', fillOpacity: 0.3 };
          },
          // bind popup to the state name
          onEachFeature: (feature, layer) => {
            if (location.includes(',') // check if location is a string of state codes
                ? location.split(', ').map(code => mapStateCodeToName(code)).includes(feature.properties.STATE_NAME)
                : [mapStateCodeToName(location)].includes(feature.properties.STATE_NAME)) {
                  layer.bindPopup(feature.properties.STATE_NAME, { closeButton: false });
            }
          }
        }).addTo(map);
      });

    return () => map.remove();
  }, [location]);

  // function to map state code to state name
  function mapStateCodeToName(code) {
    switch (code) {
      case 'NSW': return 'New South Wales';
      case 'NT': return 'Northern Territory';
      case 'QLD': return 'Queensland';
      case 'SA': return 'South Australia';
      case 'TAS': return 'Tasmania';
      case 'VIC': return 'Victoria';
      case 'WA': return 'Western Australia';
      case 'ACT': return 'Australian Capital Territory';
      default: return '';
    }
  }

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default AustraliaMap;
