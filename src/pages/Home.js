import React, { Suspense, lazy } from 'react';
import ImageSlider from '../components/ImageSlider';
import SectionWrapper from '../components/SectionWrapper';
import { FiPhone, FiMapPin, FiEdit, FiShare2 } from 'react-icons/fi';

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
      {/* 슬라이드와 오버레이 컨테이너 */}
      <div className="relative pt-20">
        <div className="relative">
          {/* ImageSlider는 내부에서 object-cover로 이미지가 컨테이너를 꽉 채우도록 처리 */}
          <ImageSlider images={slideImages} interval={4000} />
          {/* Overlay: 슬라이드와 무관하게 항상 표시됨 */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
            {/* 데스크탑 오버레이 텍스트 */}
            <div className="hidden md:flex flex-col justify-center items-center h-full text-center">
              <h1 className="text-5xl font-bold text-gray-800 drop-shadow-md">
                BlueHousing
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-xl px-4 leading-relaxed">
                30년 경력 마이스터가 시공하는 종합 인테리어 전문기업
                <br />
                <span className="whitespace-nowrap">
                  A comprehensive interior design company led by a master with 30 years of experience.
                </span>
              </p>
            </div>
            {/* 모바일 오버레이: 텍스트와 버튼 */}
            <div className="md:hidden h-full flex flex-col justify-between">
              {/* 중앙 텍스트 */}
              <div className="flex flex-col justify-center items-center h-full">
                <div className="pointer-events-auto text-center px-4">
                  <h1 className="text-3xl font-bold text-white drop-shadow-md">
                    BlueHousing
                  </h1>
                  <p className="mt-2 text-white leading-relaxed">
                    30년 경력 마이스터가 시공하는 종합 인테리어 전문기업
                    <br />
                    <span className="text-xs">
                      A comprehensive interior design company led by a master with 30 years of experience.
                    </span>
                  </p>
                </div>
              </div>
              {/* 하단 버튼 그룹 (이미지 하단에 오버레이) */}
              <div className="flex justify-center space-x-4 mb-4 pointer-events-auto">
                {/* 전화 버튼 */}
                <button
                  className="bg-black/50 text-white rounded-full p-3 shadow flex items-center justify-center"
                  onClick={() => window.location.href = 'tel:023939759'}
                >
                  <FiPhone size={24} />
                </button>
                {/* 오시는길 버튼 */}
                <button
                  className="bg-black/50 text-white rounded-full p-3 shadow flex items-center justify-center"
                  onClick={() => window.location.href = '/location'}
                >
                  <FiMapPin size={24} />
                </button>
                {/* 견적문의 버튼 */}
                <button
                  className="bg-black/50 text-white rounded-full p-3 shadow flex items-center justify-center"
                  onClick={() => window.location.href = '/estimate'}
                >
                  <FiEdit size={24} />
                </button>
                {/* 링크 공유 버튼 */}
                <button
                  className="bg-black/50 text-white rounded-full p-3 shadow flex items-center justify-center"
                  onClick={handleShare}
                >
                  <FiShare2 size={24} />
                </button>
              </div>
            </div>
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
