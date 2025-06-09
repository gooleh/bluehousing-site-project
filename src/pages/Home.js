// src/pages/Home.js
import React, { Suspense, lazy, useState } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // 슬라이드 인덱스에 따른 오버레이 텍스트 색상 결정 (예: 슬라이드 1, 3번은 어두운색)
  // 여기서는 인덱스 0과 2가 해당한다고 가정합니다.
  const overlayTextClass = (currentSlide === 0 || currentSlide === 2) ? 'text-gray-600' : 'text-white';

  return (
    <div className="bg-white">
      <div className="relative pt-20">
        <div className="relative">
          <ImageSlider 
            images={slideImages} 
            interval={4000} 
            onSlideChange={setCurrentSlide} 
          />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
            {/* 데스크탑 오버레이 텍스트 */}
            <div className="hidden md:flex flex-col justify-center items-center h-full text-center">
              <h1 className={`text-5xl font-bold ${overlayTextClass} drop-shadow-md`}>
                BlueHousing
              </h1>
              <p className={`mt-4 text-lg ${overlayTextClass} px-4 leading-relaxed`}>
                30년 경력 마이스터가 시공하는 종합 인테리어 전문기업
              </p>
              <p className={`mt-2 text-lg ${overlayTextClass} px-4 whitespace-nowrap`}>
                A comprehensive interior design company led by a master with 30 years of experience.
              </p>
            </div>
            {/* 모바일 오버레이: 텍스트와 버튼 */}
            <div className="md:hidden h-full flex flex-col justify-between">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="pointer-events-auto text-center px-4">
                  <h1 className={`text-3xl font-bold ${overlayTextClass} drop-shadow-md`}>
                    BlueHousing
                  </h1>
                  <p className={`mt-2 ${overlayTextClass} leading-relaxed`}>
                    30년 경력 마이스터가 시공하는 종합 인테리어 전문기업
                  </p>
                  <p className={`mt-1 text-xs ${overlayTextClass}`}>
                    A comprehensive interior design company led by a master with 30 years of experience.
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mb-4 pointer-events-auto">
                <button
                  className="bg-black/50 text-white rounded-full p-3 shadow flex items-center justify-center"
                  onClick={() => window.location.href = 'tel:023939759'}
                >
                  <FiPhone size={24} />
                </button>
                <button
                  className="bg-black/50 text-white rounded-full p-3 shadow flex items-center justify-center"
                  onClick={() => window.location.href = '/location'}
                >
                  <FiMapPin size={24} />
                </button>
                <button
                  className="bg-black/50 text-white rounded-full p-3 shadow flex items-center justify-center"
                  onClick={() => window.location.href = '/estimate'}
                >
                  <FiEdit size={24} />
                </button>
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
