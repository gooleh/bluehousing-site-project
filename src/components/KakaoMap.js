// src/components/KakaoMap.js
// 카카오 지도 SDK를 /location 페이지 진입 시에만 동적 로드합니다.
// index.html에서 전체 페이지 로드하던 방식을 제거해 다른 페이지 성능 개선.
// 참고: SDK 앱키가 bluehousing.co.kr 도메인에 고정되어 있어 localhost에서는 지도가 빈 화면 — 정상.

import React, { useEffect } from 'react';
import company from '../data/company';

const APP_KEY = 'e240bec0a6bd8345443fc9609da4c243';

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

    // SDK가 이미 로드된 경우 (페이지 재방문 등)
    if (window.kakao?.maps) {
      window.kakao.maps.load(initMap);
      return;
    }

    // SDK 동적 로드 (autoload=false → load() 콜백으로 초기화)
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&libraries=services&autoload=false`;
    script.onload = () => window.kakao.maps.load(initMap);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full h-96 rounded-md shadow overflow-hidden">
      <div
        id="kakaoMap"
        className="w-full h-full"
        role="img"
        aria-label={`${company.map.name} 위치 지도`}
      />
    </div>
  );
};

export default KakaoMap;
