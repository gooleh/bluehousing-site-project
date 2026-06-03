// src/pages/Gallery.js
import React, { useState, useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiZoomIn } from 'react-icons/fi';
import Modal from '../components/Modal';
import ImageSlider from '../components/ImageSlider';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import BeforeAfterCompare from '../components/BeforeAfterCompare';
import { galleryImg } from '../data/galleryImages';
import { beforeAfterProjects } from '../data/galleryBeforeAfter';
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

  const renderBeforeAfterSection = (project, sectionIndex) => (
    <section
      key={project.id}
      className={`py-14 md:py-20 ${
        sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-slate-50/80 to-white'
      }`}
    >
      <div className="container-content">
        <SectionHeading title={project.title} english="Before & After" />
        <p className="-mt-4 mb-8 text-sm text-ink-muted text-center md:text-left">
          슬라이더를 좌우로 드래그해 시공 전·후를 비교해 보세요.
        </p>
        <div className="grid gap-8 md:gap-10 grid-cols-1 lg:grid-cols-2">
          {project.pairs.map((pair) => (
            <BeforeAfterCompare
              key={`${project.id}-${pair.label}`}
              before={pair.before}
              after={pair.after}
              label={pair.label}
            />
          ))}
        </div>
      </div>
    </section>
  );

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

  const renderSliderSection = (group, sectionIndex) => (
    <section
      key={group.title}
      className={`py-14 md:py-20 ${
        sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-slate-50/80 to-white'
      }`}
    >
      <div className="container-content">
        <SectionHeading title={group.title} english="Portfolio" />
        <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-ink/5">
          <ImageSlider
            images={group.images.map((item) => item.src)}
            imageAlts={group.images.map((item) => item.caption)}
            interval={4500}
            heightClass="h-[300px] md:h-[480px]"
            overlayGradient
          />
        </div>
      </div>
    </section>
  );

  // 시공 전/후 프로젝트는 beforeAfterProjects, 나머지는 일반 갤러리
  const sections = [
    { type: 'grid', group: groupA, layout: 2 },
    { type: 'grid', group: groupB, layout: 3 },
    { type: 'slider', group: groupC },
    { type: 'beforeAfter', project: beforeAfterProjects[0] },
    { type: 'grid', group: groupE, layout: 3 },
    { type: 'beforeAfter', project: beforeAfterProjects[1] },
    { type: 'beforeAfter', project: beforeAfterProjects[2] },
    { type: 'grid', group: groupH1, layout: 3 },
    { type: 'grid', group: groupH2, layout: 2 },
    { type: 'grid', group: groupI, layout: 3 },
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

      {sections.map((section, index) => {
        if (section.type === 'beforeAfter') {
          return renderBeforeAfterSection(section.project, index);
        }
        if (section.type === 'slider') {
          return renderSliderSection(section.group, index);
        }
        return renderGridSection(section.group, section.layout, index);
      })}

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
    </div>
  );
};

export default Gallery;
