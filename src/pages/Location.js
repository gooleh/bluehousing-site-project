// src/pages/Location.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import KakaoMap from '../components/KakaoMap';
import DirectionsButton from '../components/DirectionsButton';
import { RiMapPinLine, RiSubwayLine, RiPhoneLine } from 'react-icons/ri';
import PageHero from '../components/PageHero';
import company from '../data/company';
import banner from '../assets/images/slide4.webp';

const Location = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>오시는 길 | 블루하우징</title>
        <meta name="description" content="블루하우징 본사 위치 안내. 서울 서대문구 충정로9길 15 라인빌딩 1층, 5호선 서대문역 1번 출구 도보 3분." />
      </Helmet>

      <PageHero
        image={banner}
        english="Location"
        title="오시는 길"
        subtitle="서대문역 1번 출구에서 도보 3분, 편하게 방문하세요."
      />

      <div className="container-content py-14 md:py-16">
        {/* 지도 */}
        <div className="overflow-hidden rounded-2xl shadow-card">
          <KakaoMap />
        </div>

        {/* 안내 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-7 rounded-2xl shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <RiMapPinLine className="text-2xl text-brand-600" />
              <h2 className="text-lg font-bold text-ink">주소</h2>
            </div>
            <p className="text-ink-soft leading-relaxed">
              {company.roadAddress}<br />
              <span className="text-ink-muted text-sm">{company.addressDetail}</span>
            </p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              <span className="font-semibold text-ink">지번 주소</span><br />
              {company.jibunAddress}
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <RiSubwayLine className="text-2xl text-brand-600" />
              <h2 className="text-lg font-bold text-ink">대중교통</h2>
            </div>
            <p className="text-ink-soft leading-relaxed">
              {company.transit}
            </p>

            <div className="flex items-center gap-2 mt-5 mb-3">
              <RiPhoneLine className="text-2xl text-brand-600" />
              <h2 className="text-lg font-bold text-ink">대표번호</h2>
            </div>
            <a href={`tel:${company.phone.raw}`} className="text-brand-700 font-semibold hover:underline">
              {company.phone.display}
            </a>
          </div>
        </div>

        {/* 길찾기 버튼 */}
        <div className="mt-8 flex justify-center">
          <DirectionsButton />
        </div>
      </div>
    </div>
  );
};

export default Location;
