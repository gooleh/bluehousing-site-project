// src/pages/ShowroomDetail.js
import React, { useState, useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Modal from '../components/Modal';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { FiZoomIn } from 'react-icons/fi';
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
    <div className="bg-white dark:bg-gray-900">
      <Helmet>
        <title>블루하우징 전시장 상세페이지 | 30년 경력 인테리어 전문기업</title>
        <meta
          name="description"
          content="블루하우징 전시장에서 만나볼 수 있는 품격 있는 욕실 시공 사례를 소개합니다. 모던하고 우아한 스타일을 확인해보세요."
        />
      </Helmet>

      <PageHero
        image={banner1}
        english="Showroom"
        title="블루하우징 전시장"
        subtitle="30년 경력 마이스터의 노하우로 완성된 욕실 시공 사례를 한눈에 만나보세요."
        height="lg"
      />

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
  <section className="py-14 md:py-20 border-t border-ink/5 bg-white dark:bg-gray-800 even:bg-gradient-to-b even:from-slate-50/80 even:to-white dark:even:from-gray-800 dark:even:to-gray-900">
    <div className="container-content">
      <SectionHeading title={title} english="Showroom Style" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onImageClick(images, index)}
            className="gallery-card group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5 text-left shadow-soft ring-1 ring-ink/5"
          >
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-ink shadow-card">
                <FiZoomIn className="text-lg" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="max-w-2xl rounded-2xl bg-white/80 dark:bg-gray-700/60 p-6 md:p-8 ring-1 ring-ink/5 dark:ring-gray-600 shadow-soft">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400 mb-4">
          욕실 시공 구성
        </h3>
        <ul className="text-ink-soft dark:text-gray-300 leading-relaxed space-y-2.5">
          {description.map((desc, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-900/40 text-xs font-bold text-brand-700 dark:text-brand-300">
                {idx + 1}
              </span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ShowroomDetail;
