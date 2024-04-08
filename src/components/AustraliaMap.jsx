import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import birdMaker from '../imgs/grasswren/birds-mapmarker.png';

const AustraliaMap = ({ location, observation }) => {
  // create a reference to the map
  const mapRef = useRef(null);

  // 创建一个自定义图标
  const customIcon = L.icon({
    iconUrl: birdMaker, // 图标的url
    iconSize: [32, 37], // 图标的大小
    iconAnchor: [16, 37], // 图标的锚点（图标相对于其经纬度点的位置）
    popupAnchor: [0, -37] // 弹出窗口相对于图标的位置
  });


  // useEffect hook to render the map
  useEffect(() => {
    if (!mapRef.current || !location) return;
    const map = L.map(mapRef.current, {
      center: [-26.6980, 133.8807], // Australia center coordinates
      zoom: 3,
      zoomControl: true, // disable zoom control
      scrollWheelZoom: true, // disable scroll zoom
      dragging: true, // disable dragging
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

    // Add observation points to the map
    if (observation.length > 1) {
      observation.forEach(obs => {
        L.marker([obs.lat, obs.lon], { icon: customIcon }).addTo(map)
          .bindPopup(`Observation: ${obs.lat}, ${obs.lon}`);
      });
    }


    console.log(location);



    return () => map.remove();
  }, [location, observation]);

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
