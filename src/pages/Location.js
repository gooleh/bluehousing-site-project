 // src/pages/Location.js
import React from 'react';
import NaverMap from '../components/NaverMap';

const Location = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">오시는 길</h1>
      <p className="text-gray-700 mb-4">
        당사 사무실 위치와 교통편 안내를 확인하세요.
      </p>

      {/* 지도 표시 */}
      <NaverMap />

      {/* 추가 안내 텍스트 등 */}
      <div className="mt-8 text-gray-700 leading-relaxed">
        <p>주소: 서울특별시 ...</p>
        <p>주차 안내: 건물 뒷편에 주차 가능</p>
        <p>대중교통: 2호선 ...</p>
      </div>
    </div>
  );
};

export default Location;
