// src/components/KakaoMap.js
import React, { useEffect } from 'react';
import company from '../data/company';

const KakaoMap = () => {
  useEffect(() => {
    const { lat, lng, name } = company.map;
    const container = document.getElementById('kakaoMap');
    if (!container) return;

    const initMap = () => {
      const { kakao } = window;
      if (!kakao?.maps) return;

      const position = new kakao.maps.LatLng(lat, lng);
      const map = new kakao.maps.Map(container, {
        center: position,
        level: 3,
      });

      const marker = new kakao.maps.Marker({ position });
      marker.setMap(map);

      new kakao.maps.CustomOverlay({
        position,
        content: `
          <div style="
            padding: 4px 8px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 12px;
            color: #333;
            white-space: nowrap;
          ">
            ${name}
          </div>
        `,
        yAnchor: 1.8,
        map,
      });
    };

    if (window.kakao?.maps) {
      window.kakao.maps.load(initMap);
    }
  }, []);

  return (
    <div className="w-full h-96 rounded-md shadow overflow-hidden">
      <div id="kakaoMap" className="w-full h-full" role="img" aria-label={`${company.map.name} 위치 지도`} />
    </div>
  );
};

export default KakaoMap;
