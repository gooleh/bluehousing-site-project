// src/components/KakaoMap.js
import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;

      // 실제 블루하우징 위치의 위경도 (예시 값; 실제 좌표로 업데이트)
      const COMPANY_LAT = 37.5642896;
      const COMPANY_LNG = 126.9645037;

      const container = document.getElementById('kakaoMap');
      const options = {
        center: new kakao.maps.LatLng(COMPANY_LAT, COMPANY_LNG),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);

      // 기본 마커 생성 (커스텀 이미지 없이)
      const markerPosition = new kakao.maps.LatLng(COMPANY_LAT, COMPANY_LNG);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);

      // "블루하우징" 텍스트를 항상 표시하는 CustomOverlay 생성
      const overlayContent = `
        <div style="
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 12px;
          color: #333;
          white-space: nowrap;
        ">
          블루하우징
        </div>
      `;

      const customOverlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: overlayContent,
        yAnchor: 1.8, // 마커 위쪽에 오버레이를 배치 (값은 필요에 따라 조정)
        map: map
      });
    }
  }, []);

  return (
    <div className="w-full h-96 rounded-md shadow overflow-hidden">
      <div id="kakaoMap" className="w-full h-full" />
    </div>
  );
};

export default KakaoMap;
