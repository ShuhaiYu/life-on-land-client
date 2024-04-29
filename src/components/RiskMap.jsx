import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import axios from 'axios';
import birdMarker from '../imgs/grasswren/birds-mapmarker.png';


const RiskMap = ({ isFireShow, isFoxShow, isCatShow, isHumanShow, isButtonShow }) => {
  const mapRef = useRef(null);
  const [fireLayer, setFireLayer] = useState(null);
  const [foxLayer, setFoxLayer] = useState(null);
  const [catLayer, setCatLayer] = useState(null);
  const [humanLayer, setHumanLayer] = useState(null);
  const [grasswrenData, setGrasswrenData] = useState([]);
  const [map, setMap] = useState(null);

  // Custom icon
  const customIcon = L.icon({
    iconUrl: birdMarker,
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -37]
  });

  useEffect(() => {
    const fetchGrasswrenData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/grasswren/geo/all`);
        setGrasswrenData(data);
      } catch (error) {
        console.error('Failed to fetch Grasswren data:', error);
      }
    };

    fetchGrasswrenData();
  }, []);

  useEffect(() => {
    if (map && grasswrenData.length > 0) {
      grasswrenData.forEach(group => {
        group.observations.forEach(obs => {
          const date = new Date(obs.date).toLocaleDateString();
          L.marker([obs.lat, obs.lon], { icon: customIcon }).addTo(map)
            .bindPopup(`Common Name: ${group.common_name}<br>Observation Date: ${date}`);
        });
      });
    }
  }, [map, grasswrenData]);

  const processFireData = (data) => {
    return data.map(item => [item.first_point.y, item.first_point.x, 1]); // Lat, Lng, Intensity
  };

  const processPredatorData = (data) => {

    const foxPoints = data.fox.map(item =>
      L.circleMarker([item.obs_lat, item.obs_lon], {
        radius: 5,
        fillColor: "#C7A801",
        color: "#C7A801",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      })
    );
    const catPoints = data.cat.map(item =>
      L.circleMarker([item.obs_lat, item.obs_lon], {
        radius: 5,
        fillColor: "#181E5B",
        color: "#181E5B",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      })
    );
    return { foxPoints, catPoints };
  };

  const processHumanData = (data) => {
    const campingPoints = data.camping.map(camp =>
      L.circleMarker([camp.geometry.y, camp.geometry.x], {
        radius: 5,
        fillColor: "#5A3F37",
        color: "#5A3F37",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      })
    );
    const huntingPoints = data.hunting.map(hunt =>
      L.circleMarker([hunt.geometry.y, hunt.geometry.x], {
        radius: 5,
        fillColor: "#5A3F37",
        color: "#5A3F37",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      })
    );
    return { campingPoints, huntingPoints };
  };

  // Initialize map
  useEffect(() => {
    const initialMap = L.map(mapRef.current, {
      center: [-26.0, 136.0], // Sydney coordinates
      zoom: 5,
      maxZoom: 10,
      minZoom: 3
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(initialMap);

    setMap(initialMap);

    return () => {
      initialMap.remove();
    };
  }, []);

  const fetchData = async (url, setter, type) => {
    try {
      const { data } = await axios.get(url);
      let layer;

      if (type === 'fire') {
        const points = processFireData(data);
        layer = L.heatLayer(points, { radius: 25, gradient: { 0.4: 'yellow', 0.65: 'orange', 1: 'red' } });
        setter(layer);
        if (!isButtonShow && layer && map) {
          layer.addTo(map);
        } else {
          console.error("Failed to create fire layer");
        }

      } else if (type === 'predators') {
        const { foxPoints, catPoints } = processPredatorData(data);
        if (isFoxShow && !foxLayer) {
          const newFoxLayer = L.layerGroup(foxPoints);
          setFoxLayer(newFoxLayer);
          if (!isButtonShow && newFoxLayer) {
            newFoxLayer.addTo(map);
          }
        }
        if (isCatShow && !catLayer) {
          const newCatLayer = L.layerGroup(catPoints);
          setCatLayer(newCatLayer);
          if (!isButtonShow && newCatLayer) {
            newCatLayer.addTo(map);
          }
        }
        return; // Early return to avoid setting layer again
      } else if (type === 'human') {
        const { campingPoints, huntingPoints } = processHumanData(data);
        layer = L.layerGroup([...campingPoints, ...huntingPoints]);
        setter(layer);
        if (!isButtonShow && layer) {
          layer.addTo(map);
        }
      }

    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };



  // Fetch data and add to map based on props
  useEffect(() => {
    if (isFireShow && !fireLayer) {
      console.log('Fetching fire data');
      fetchData(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/firepoints`, setFireLayer, 'fire');

    }
    if ((isFoxShow || isCatShow) && (!foxLayer || !catLayer)) {
      console.log('Fetching predator data');
      fetchData(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/predators`, (data) => {
        const { foxPoints, catPoints } = processPredatorData(data);
        if (isFoxShow && !foxLayer) {
          const foxLayer = L.layerGroup(foxPoints).addTo(map);
          setFoxLayer(foxLayer);
        }
        if (isCatShow && !catLayer) {
          const catLayer = L.layerGroup(catPoints).addTo(map);
          setCatLayer(catLayer);
        }
      }, 'predators');
    }
    if (isHumanShow && !humanLayer) {
      console.log('Fetching human data');
      fetchData(`${import.meta.env.VITE_SERVER_DOMAIN}/api/risk/human`, setHumanLayer, 'human');
    }


  }, [isFireShow, isFoxShow, isCatShow, isHumanShow, map]);


  // Toggle visibility of layers
  const toggleLayer = (layer) => {
    if (layer && map) {
      if (map.hasLayer(layer)) {
        map.removeLayer(layer);
      } else {
        console.log('Adding layer to map');
        layer.addTo(map);
      }
    } else {
      console.error("Layer or map not initialized");
    }
  };

  return (
    <div className='flex h-full'>
      {isButtonShow && (
        <div className='flex flex-col items-center justify-center m-10 w-1/4'>
          {
            isFireShow &&
            <div className='flex flex-col items-center justify-center p-5 m-2 bg-[#FA8700] text-white rounded-lg shadow-lg'>
              <h2 className='text-lg font-bold mb-2'>Threats of Wildfire</h2>
              <p className='mb-4'>The heatmap indicates where wildfires occur most frequently in each area.</p>
              <button className='btn-light w-full bg-[#FA8700] hover:bg-gray-200 hover:text-dark-green border-white text-white' onClick={() => toggleLayer(fireLayer)}>Show Wildfire</button>
            </div>
          }
          {
            isFoxShow &&
            <div className='flex flex-col items-center justify-center p-5 m-2 bg-[#C7A801] text-white rounded-lg shadow-lg'>
              <h2 className='text-lg font-bold mb-2'>Threats of Feral Foxes</h2>
              <p className='mb-4'>The mustard yellow dots indicate the population of feral foxes in each area.</p>
              <button className='btn-light w-full bg-[#C7A801] hover:bg-gray-200 hover:text-dark-green border-white text-white' onClick={() => toggleLayer(foxLayer)}>Show Feral Foxes</button>
            </div>
          }
          {
            isCatShow &&
            <div className='flex flex-col items-center justify-center p-5 m-2 bg-[#181E5B] text-white rounded-lg shadow-lg'>
              <h2 className='text-lg font-bold mb-2'>Threats of Feral Cats</h2>
              <p className='mb-4'>The navy dots indicate the population of feral cats in each area.</p>
              <button className='btn-light w-full bg-[#181E5B] hover:bg-gray-200 hover:text-dark-green border-white text-white' onClick={() => toggleLayer(catLayer)}>Show Feral Cats</button>
            </div>
          }
          {
            isHumanShow &&
            <div className='flex flex-col items-center justify-center p-5 m-2 bg-[#5A3F37] text-white rounded-lg shadow-lg'>
              <h2 className='text-lg font-bold mb-2'>Threats of Human Activities</h2>
              <p className='mb-4'>The brown dots indicate human activities such as hunting and camping in each area.</p>
              <button className='btn-light w-full bg-[#5A3F37] hover:bg-gray-200 hover:text-dark-green border-white text-white' onClick={() => toggleLayer(humanLayer)}>Show Human Activities</button>
            </div>
          }
        </div>
      )}


      <div className={`w-${isButtonShow ? '3/4' : 'full'} h-full z-10 border-[40px] border-white ${isButtonShow ? 'mr-20' : ''}`} ref={mapRef}></div>

    </div>
  );
};

export default RiskMap;
