// src/components/KakaoMap.js
import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    // 스크립트 로드 후 window.kakao.maps 객체 사용 가능
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('kakaoMap');
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 좌표(예: 서울 시청)
        level: 3 // 지도 확대 레벨
      };

      // 지도 생성
      new window.kakao.maps.Map(container, options);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      {/* 실제 지도가 들어갈 div: #kakaoMap */}
      <div id="kakaoMap" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default KakaoMap;
