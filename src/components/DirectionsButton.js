// src/components/DirectionsButton.js
import React from 'react';
import { RiMapPinLine } from 'react-icons/ri';
import company from '../data/company';

const DirectionsButton = () => {
  const handleClick = () => {
    const { name, lat, lng } = company.map;
    const kakaoLink = `https://map.kakao.com/link/to/${encodeURIComponent(name)},${lng},${lat}`;
    window.open(kakaoLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold shadow-soft transition-colors hover:bg-brand-700"
    >
      <RiMapPinLine className="text-xl" />
      카카오맵 길찾기
    </button>
  );
};

export default DirectionsButton;
