import React, { useEffect } from 'react';

const NaverMap = () => {
  useEffect(() => {
    if (window.naver && window.naver.maps) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.3595704, 127.105399), // 예시
        zoom: 10
      };
      new window.naver.maps.Map('map', mapOptions);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <div id="map" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default NaverMap;
