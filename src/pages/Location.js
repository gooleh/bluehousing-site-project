// src/pages/Location.js
import React from 'react';
import KakaoMap from '../components/KakaoMap';

const Location = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">오시는 길</h1>
      <p className="text-gray-700 mb-4">
        주소, 교통편 안내 등 부가 정보를 여기에 작성합니다.
      </p>

      {/* 카카오 지도 표시 */}
      <KakaoMap />

      {/* 추가 안내 (주차 안내, 대중교통, 연락처 등) */}
      <div className="mt-8 text-gray-700">
        <p>주소: 서울특별시 ...</p>
        <p>주차 안내: 건물 옆 주차장 사용 가능</p>
        <p>지하철: 2호선 무슨역 도보 5분</p>
      </div>
    </div>
  );
};

export default Location;
