import React from 'react';
import ImageSlider from '../components/ImageSlider';

// 로컬 슬라이드 이미지 파일 임포트
import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';
import slide4 from '../assets/images/slide4.png';

const slideImages = [slide1, slide2, slide3, slide4];

const Home = () => {
  return (
    <div className="relative pt-20 bg-white">
      {/* 이미지 슬라이더 */}
      <div className="relative">
        <ImageSlider images={slideImages} interval={4000} />
        
        {/* 슬라이더 위에 텍스트 오버레이 */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-20 pointer-events-none">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
            블루하우징
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-700 max-w-xl px-4 leading-relaxed">
            깔끔한 인테리어와 품격 있는 주거 공간을 제공하는 종합건설회사
          </p>
        </div>
      </div>

      {/* 슬라이더 아래 소개 섹션 */}
      <div className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          블루하우징은 종합건설회사입니다.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          블루하우징은 전문건설업체로서 LG하우시스 자재를 통해 시공부터 사후관리까지 
          안전하고 편리한 서비스를 제공합니다. 경량철골, 전원주택, 아파트 리모델링 등
          다양한 시공 경험을 바탕으로 높은 고객 만족도를 추구합니다.
        </p>
      </div>
    </div>
  );
};

export default Home;
