import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AustraliaMap = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !location) return;
    const map = L.map(mapRef.current, {
      center: [-26.6980, 133.8807], // 使用澳大利亚中心的坐标作为地图中心
      zoom: 3,
      zoomControl: false, // 禁用缩放控件
      scrollWheelZoom: false, // 禁用滚轮缩放
      dragging: false, // 禁用拖动
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // 使用fetch异步加载GeoJSON数据
    fetch('/data/states.min.geojson')
      .then(response => response.json())
      .then(data => {
        L.geoJson(data, {
          style: (feature) => {
            // 将location字符串转换为状态名称数组
            const stateNames = location.includes(',') 
              ? location.split(', ').map(code => mapStateCodeToName(code))
              : [mapStateCodeToName(location)];
            
            // 根据location变量改变颜色
            if (stateNames.includes(feature.properties.STATE_NAME)) {
              return { color: '#000', fillColor: '#222', fillOpacity: 0.7 };
            }
            return { color: '#000', fillColor: '#fff', fillOpacity: 0.3 };
          },
          onEachFeature: (feature, layer) => {
            if (location.includes(',') 
                ? location.split(', ').map(code => mapStateCodeToName(code)).includes(feature.properties.STATE_NAME)
                : [mapStateCodeToName(location)].includes(feature.properties.STATE_NAME)) {
                  layer.bindPopup(feature.properties.STATE_NAME, { closeButton: false });
            }
          }
        }).addTo(map);
      });

    return () => map.remove();
  }, [location]);

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
