// src/pages/Gallery.js
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiZoomIn, FiArrowRight } from 'react-icons/fi';
import Modal from '../components/Modal';
import PageHero from '../components/PageHero';
// ImageSlider 제거됨 — 슬라이더 섹션 없음
import SectionHeading from '../components/SectionHeading';
import { galleryImg } from '../data/galleryImages';
import bannerGallery from '../assets/images/slide2.webp';

const makeGroup = (title, names) => ({
  title,
  images: names.map((name, i) => ({
    src: galleryImg(name),
    caption: `${title} ${i + 1}`,
  })),
});

const range = (prefix, start, end) => {
  const out = [];
  for (let n = start; n <= end; n += 1) out.push(`${prefix}${n}`);
  return out;
};

const groupA = makeGroup('전시장 사진', range('', 1, 2));
const groupB = makeGroup('욕실 디자인', range('', 3, 14));
const groupC = makeGroup('시공사례', range('c', 1, 19));
const groupE = makeGroup('서울대학교 의생명 | 인조대리석 공사 (시공 사진)', range('e', 1, 6));
const groupH1 = makeGroup('포천 동교동 | 욕실 2세트 (시공 후) H-1', range('h', 1, 3));
const groupH2 = makeGroup('포천 동교동 | 욕실 2세트 (시공 후) H-2', range('h', 4, 5));
const groupI = makeGroup('블루하우징 욕실 시공 사진', range('i', 1, 21));

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroup, setCurrentGroup] = useState([]);
  const [currentCaptions, setCurrentCaptions] = useState([]);

  const openModal = useCallback((images, index) => {
    setCurrentGroup(images.map((item) => item.src));
    setCurrentCaptions(images.map((item) => item.caption));
    setCurrentIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? currentGroup.length - 1 : prev - 1));
  }, [currentGroup.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === currentGroup.length - 1 ? 0 : prev + 1));
  }, [currentGroup.length]);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, prevImage, nextImage, closeModal]);

  const gridColsClass = (columns) =>
    columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  const renderGridSection = (group, columns, sectionIndex) => (
    <section
      key={group.title}
      className={`py-14 md:py-20 ${
        sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-slate-50/80 to-white'
      }`}
    >
      <div className="container-content">
        <SectionHeading title={group.title} english="Portfolio" />
        <div className={`grid gap-4 md:gap-5 ${gridColsClass(columns)}`}>
          {group.images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openModal(group.images, index)}
              className="gallery-card group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5 text-left shadow-soft ring-1 ring-ink/5"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-ink shadow-card">
                  <FiZoomIn className="text-xl" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-sm font-medium text-white/95 line-clamp-2">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  const sections = [
    { group: groupA, layout: 2 },
    { group: groupB, layout: 3 },
    { group: groupC, layout: 3 },
    { group: groupE, layout: 3 },
    { group: groupH1, layout: 3 },
    { group: groupH2, layout: 2 },
    { group: groupI, layout: 3 },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>갤러리 | 블루하우징 시공 사례</title>
        <meta
          name="description"
          content="블루하우징의 욕실·주택 리모델링 및 인테리어 시공 사례 갤러리. 시공 전후 비교와 다양한 실제 시공 사진을 확인하세요."
        />
      </Helmet>

      <PageHero
        image={bannerGallery}
        english="Gallery"
        title="갤러리"
        subtitle="블루하우징이 완성한 실제 시공 사례를 만나보세요."
        height="lg"
      />

      {sections.map((section, index) =>
        renderGridSection(section.group, section.layout, index)
      )}

      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          imgList={currentGroup}
          captions={currentCaptions}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
          setCurrentIndex={setCurrentIndex}
        />
      )}

      {/* CTA */}
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container-content text-center">
          <p className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-3">Free Estimate</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            이런 공간, 우리 집에도 만들고 싶다면?
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            30년 경력 마이스터에게 무료로 상담·견적을 받아보세요.
          </p>
          <Link
            to="/estimate"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-base font-semibold text-white shadow-card-hover transition-all hover:bg-accent-600 hover:scale-[1.03]"
          >
            무료 견적 받기 <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
