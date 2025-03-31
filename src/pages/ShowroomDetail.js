// src/pages/ShowroomDetail.js
import React, { useState, useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DiamondIcon } from 'lucide-react';
import Modal from '../components/Modal';

// 배너 이미지 임포트
import banner1 from '../assets/images/slide4.webp';

// 이미지 임포트 (Showroom 폴더)
import showroom1 from '../assets/images/Showroom/showroom1.jpeg';
import showroom2 from '../assets/images/Showroom/showroom2.jpeg';
import showroom3 from '../assets/images/Showroom/showroom3.jpeg';
import showroom4 from '../assets/images/Showroom/showroom4.jpeg';
import showroom5 from '../assets/images/Showroom/showroom5.jpeg';
import showroom6 from '../assets/images/Showroom/showroom6.jpeg';
import showroom7 from '../assets/images/Showroom/showroom7.jpeg';
import showroom8 from '../assets/images/Showroom/showroom8.jpeg';
import showroom9 from '../assets/images/Showroom/showroom9.jpeg';
import showroom10 from '../assets/images/Showroom/showroom10.jpeg';
import showroom11 from '../assets/images/Showroom/showroom11.jpeg';
import showroom12 from '../assets/images/Showroom/showroom12.jpeg';
import showroom13 from '../assets/images/Showroom/showroom13.jpeg';
import showroom14 from '../assets/images/Showroom/showroom14.jpeg';
import showroom15 from '../assets/images/Showroom/showroom15.jpeg';

const showroomData = [
  {
    title: "모던스타일",
    images: [showroom1, showroom2, showroom3],
    description: [
      "비데일체형 양변기",
      "사각세면기 / 하부장",
      "상부장",
      "원홀세면기 수전",
      "블랙후레임 거울",
      "도기 선반레인샤워기",
      "벽타일 300*600, 바닥타일 300*300",
      "악세서리"
    ],
  },
  {
    title: "브라운계열 스타일",
    images: [showroom4, showroom5, showroom6, showroom7, showroom8, showroom9],
    description: [
      "투피스 밀폐형 양변기",
      "일체형 세면기",
      "슬라이드 수납장",
      "인조대리석 선반(베이지)",
      "원홀세면기 수전",
      "벽타일 300*600, 바닥타일 300*300",
      "악세서리"
    ],
  },
  {
    title: "모던스타일",
    images: [showroom10, showroom11, showroom12, showroom13, showroom14, showroom15],
    description: [
      "투피스 밀폐형 양변기",
      "세면기 / 2도어 라운드 하부장",
      "2도어 라운드 상부장",
      "라운드 선반형 거울",
      "대리석 젠다이 선반",
      "원홀세면기 수전",
      "샤워파티션(브론즈)",
      "수납형 레인샤워수전",
      "벽타일 300*600, 바닥타일 300*300",
      "악세서리"
    ],
  }
];

const ShowroomDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageList, setCurrentImageList] = useState([]);

  const openModal = useCallback((images, index) => {
    setCurrentImageList(images);
    setCurrentIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? currentImageList.length - 1 : prev - 1));
  }, [currentImageList]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === currentImageList.length - 1 ? 0 : prev + 1));
  }, [currentImageList]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, prevImage, nextImage, closeModal]);

  return (
    <div className="bg-white">
      <Helmet>
        <title>블루하우징 전시장 상세페이지 | 30년 경력 인테리어 전문기업</title>
        <meta
          name="description"
          content="블루하우징 전시장에서 만나볼 수 있는 품격 있는 욕실 시공 사례를 소개합니다. 모던하고 우아한 스타일을 확인해보세요."
        />
      </Helmet>

      {/* 배너 이미지 섹션 */}
      <div className="relative h-72 md:h-96">
        <img src={banner1} alt="Showroom Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-4">
            블루하우징 전시장
          </h1>
          <p className="text-white max-w-2xl px-4 text-sm md:text-base">
            30년 경력 마이스터의 노하우로 완성된 욕실 시공 사례를 한눈에 만나보세요.
          </p>
          <p className="text-white max-w-2xl px-4 text-[0.75rem] md:text-sm mt-4">
            BlueHousing Showroom<br />
            An interior design company led by a master with 30 years of experience,<br />
            ensuring expert construction and guaranteed after-service.<br />
            Visit our showroom to explore a variety of interior styles and the latest trends firsthand.
          </p>
        </div>
      </div>

      {/* 각 섹션 렌더링 */}
      {showroomData.map((section, idx) => (
        <ShowroomSection
          key={idx}
          title={section.title}
          images={section.images}
          description={section.description}
          onImageClick={openModal}
        />
      ))}

      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          imgList={currentImageList}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
};

const ShowroomSection = ({ title, images, description, onImageClick }) => (
  <section className="py-20 bg-white border-t">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="flex items-center text-lg md:text-xl font-semibold text-gray-900 mb-8">
        <DiamondIcon className="w-6 h-6 text-gray-900 mr-3" />
        {title}
      </h2>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => onImageClick(images, index)}
          >
            <img 
              src={img} 
              alt={`${title} ${index + 1}`} 
              className="object-cover w-full h-[280px] md:h-[380px] transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
              loading="lazy"
            />
          </div>
        ))}
      </div>
  
      <div className="max-w-3xl mx-auto text-left border-t pt-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 tracking-wide">
          욕실 시공 구성
        </h3>
        <ul className="text-gray-700 leading-relaxed space-y-2">
          {description.map((desc, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 font-bold text-gray-900">{idx + 1}.</span> 
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ShowroomDetail;
