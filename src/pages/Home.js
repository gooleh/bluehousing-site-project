// src/Home.js
import React, { Suspense, lazy } from 'react';
import ImageSlider from '../components/ImageSlider';
import SectionWrapper from '../components/SectionWrapper';

// 슬라이드 이미지 임포트
import slide1 from '../assets/images/slide1.webp';
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';
import slide4 from '../assets/images/slide4.webp';

// Sections - Lazy 로딩 적용
const ShowroomIntro = lazy(() => import('../sections/ShowroomIntro'));
const MediaCoverage = lazy(() => import('../sections/MediaCoverage'));
const GallerySection = lazy(() => import('../sections/GallerySection'));
const SNSLinks = lazy(() => import('../sections/SNSLinks'));
const Notices = lazy(() => import('../sections/Notices'));
const EstimateRequest = lazy(() => import('../sections/EstimateRequest'));
// CustomerReviews와 LocationInfo 섹션은 제거

const slideImages = [slide1, slide2, slide3, slide4];

const Home = () => {
  return (
    <div className="bg-white">
      {/* 이미지 슬라이더 */}
      <div className="relative pt-20">
        <ImageSlider images={slideImages} interval={4000} />

        {/* 슬라이더 텍스트 */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-20 pointer-events-none">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
            BlueHousing
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-700 max-w-xl px-4 leading-relaxed">
            30년 경력 마이스터가 시공하는 종합 인테리어 전문기업
            <br />
            <span className="mt-2 block text-xs md:text-base text-gray-600">
              A comprehensive interior design company led by a master with 30 years of experience.
            </span>
          </p>
        </div>
      </div>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<div className="text-center py-12">로딩 중...</div>}>
        <SectionWrapper><ShowroomIntro /></SectionWrapper>
        <SectionWrapper><MediaCoverage /></SectionWrapper>
        <SectionWrapper><GallerySection /></SectionWrapper>
        <SectionWrapper><SNSLinks /></SectionWrapper>
        <SectionWrapper><Notices /></SectionWrapper>
        <SectionWrapper><EstimateRequest /></SectionWrapper>
      </Suspense>
    </div>
  );
};

export default Home;
