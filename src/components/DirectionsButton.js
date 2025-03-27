// src/components/DirectionsButton.js
import React from 'react';
import { RiMapPinLine } from 'react-icons/ri';

const DirectionsButton = () => {
  // 업체 좌표 (경도, 위도 순)
  // 카카오맵 링크 형식: /link/to/장소명,경도,위도
  const COMPANY_NAME = '블루하우징';
  const COMPANY_LAT = 37.55938;    // 위도
  const COMPANY_LNG = 126.964628; // 경도

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert('이 브라우저에선 현재 위치를 가져올 수 없습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        const kakaoLink = `https://map.kakao.com/link/to/${COMPANY_NAME},${COMPANY_LNG},${COMPANY_LAT}`;
        window.open(kakaoLink, '_blank');
      },
      (error) => {
        alert('현재 위치 권한을 허용해주세요.');
      }
    );
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
    >
      <RiMapPinLine className="mr-2" />
      길찾기
    </button>
  );
};

export default DirectionsButton;
