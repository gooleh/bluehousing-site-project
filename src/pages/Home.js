import React, { Suspense, lazy } from 'react';
import ImageSlider from '../components/ImageSlider';
import SectionWrapper from '../components/SectionWrapper';
import { FiPhone, FiMapPin, FiEdit, FiShare2 } from 'react-icons/fi'; // react-icons 사용

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

const slideImages = [slide1, slide2, slide3, slide4];

const Home = () => {

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'BlueHousing',
        text: 'BlueHousing 인테리어 확인하기!',
        url: window.location.href,
      }).catch((error) => console.error('Error sharing', error));
    } else {
      alert('공유 기능을 지원하지 않는 브라우저입니다.');
    }
  };

  return (
    <div className="bg-white">
      {/* 이미지 슬라이더 */}
      <div className="relative pt-20">
        <ImageSlider images={slideImages} interval={4000} />

        {/* 데스크탑용 슬라이더 텍스트 */}
        <div className="hidden md:flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center text-center z-20 pointer-events-none">
          <h1 className="text-5xl font-bold text-gray-800 drop-shadow-md">
            BlueHousing
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl px-4 leading-relaxed">
            30년 경력 마이스터가 시공하는 종합 인테리어 전문기업
            <br />
            <span className="mt-2 block text-base text-gray-600">
              A comprehensive interior design company led by a master with 30 years of experience.
            </span>
          </p>
        </div>

        {/* 모바일용 슬라이더 오버레이: 텍스트 및 4개의 버튼 */}
        <div className="flex md:hidden absolute top-0 left-0 w-full h-full flex-col justify-end items-center z-20 pointer-events-none">
          {/* 모바일용 텍스트 */}
          <div className="mb-20 text-center pointer-events-auto">
            <h1 className="text-3xl font-bold text-gray-800 drop-shadow-md">
              BlueHousing
            </h1>
            <p className="mt-2 text-sm text-gray-700 max-w-xs px-2 leading-relaxed">
              30년 경력 마이스터가 시공하는 종합 인테리어 전문기업
            </p>
          </div>
          {/* 버튼 그룹 */}
          <div className="mb-8 flex space-x-4 pointer-events-auto">
            {/* 전화 버튼 */}
            <button
              className="bg-blue-500 flex items-center space-x-1 text-white px-3 py-2 rounded shadow"
              onClick={() => window.location.href = 'tel:023939759'}
            >
              <FiPhone size={18} />
              <span>전화</span>
            </button>
            {/* 오시는길 버튼 */}
            <button
              className="bg-blue-500 flex items-center space-x-1 text-white px-3 py-2 rounded shadow"
              onClick={() => window.location.href = '/location'}
            >
              <FiMapPin size={18} />
              <span>오시는길</span>
            </button>
            {/* 견적문의 버튼 */}
            <button
              className="bg-blue-500 flex items-center space-x-1 text-white px-3 py-2 rounded shadow"
              onClick={() => window.location.href = '/estimate'}
            >
              <FiEdit size={18} />
              <span>견적문의</span>
            </button>
            {/* 링크 공유 버튼 */}
            <button
              className="bg-blue-500 flex items-center space-x-1 text-white px-3 py-2 rounded shadow"
              onClick={handleShare}
            >
              <FiShare2 size={18} />
              <span>링크 공유</span>
            </button>
          </div>
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
