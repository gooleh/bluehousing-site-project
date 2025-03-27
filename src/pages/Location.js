// src/pages/Location.js
import React from 'react';
import KakaoMap from '../components/KakaoMap';
import DirectionsButton from '../components/DirectionsButton';
import { RiMapPinLine, RiSubwayLine } from 'react-icons/ri';

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">오시는 길</h1>
      
      {/* 지도 */}
      <KakaoMap />

      {/* 안내 카드 */}
      <div className="bg-white p-6 mt-8 rounded-lg shadow space-y-4 text-gray-700">
        {/* 주소 정보 */}
        <div className="flex items-center space-x-2">
          <RiMapPinLine className="text-xl text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">주소</h2>
        </div>
        <p className="ml-7">
          서울 서대문구 충정로9길 15 라인빌딩 1층<br />
          (서대문역 1번 출구에서 약 234m)<br />
          <br />
          지번 주소<br />
          서울시 서대문구 충정로2가180-5 라인빌딩 1층
        </p>

        {/* 교통편 예시 */}
        <div className="flex items-center space-x-2 mt-4">
          <RiSubwayLine className="text-xl text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">대중교통</h2>
        </div>
        <p className="ml-7">
          5호선 서대문역 1번 출구 도보 3분 / 버스 인창중고 정류장 하차 후 도보 1분
        </p>

        {/* 길찾기 버튼 */}
        <div className="mt-4">
          <DirectionsButton />
        </div>
      </div>
    </div>
  );
};

export default Location;
