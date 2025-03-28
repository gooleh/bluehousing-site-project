// src/pages/Gallery.js
import React, { useState, useCallback, useEffect } from 'react';
import Modal from '../components/Modal';
import ImageSlider from '../components/ImageSlider';
import bannerGallery from '../assets/images/banner/banner2.png'; // 배너 이미지 경로 (실제 경로로 수정)

// -------------------- 이미지 Import --------------------
// Group A: 1.jpeg, 2.jpeg
import img1 from '../assets/images/Gallery/1.jpeg';
import img2 from '../assets/images/Gallery/2.jpeg';

// Group B: 3.jpeg ~ 14.jpeg (12개)
import img3 from '../assets/images/Gallery/3.jpeg';
import img4 from '../assets/images/Gallery/4.jpeg';
import img5 from '../assets/images/Gallery/5.jpeg';
import img6 from '../assets/images/Gallery/6.jpeg';
import img7 from '../assets/images/Gallery/7.jpeg';
import img8 from '../assets/images/Gallery/8.jpeg';
import img9 from '../assets/images/Gallery/9.jpeg';
import img10 from '../assets/images/Gallery/10.jpeg';
import img11 from '../assets/images/Gallery/11.jpeg';
import img12 from '../assets/images/Gallery/12.jpeg';
import img13 from '../assets/images/Gallery/13.jpeg';
import img14 from '../assets/images/Gallery/14.jpeg';

// Group C: c1.jpeg ~ c19.jpeg (19개)
import c1 from '../assets/images/Gallery/c1.jpeg';
import c2 from '../assets/images/Gallery/c2.jpeg';
import c3 from '../assets/images/Gallery/c3.jpeg';
import c4 from '../assets/images/Gallery/c4.jpeg';
import c5 from '../assets/images/Gallery/c5.jpeg';
import c6 from '../assets/images/Gallery/c6.jpeg';
import c7 from '../assets/images/Gallery/c7.jpeg';
import c8 from '../assets/images/Gallery/c8.jpeg';
import c9 from '../assets/images/Gallery/c9.jpeg';
import c10 from '../assets/images/Gallery/c10.jpeg';
import c11 from '../assets/images/Gallery/c11.jpeg';
import c12 from '../assets/images/Gallery/c12.jpeg';
import c13 from '../assets/images/Gallery/c13.jpeg';
import c14 from '../assets/images/Gallery/c14.jpeg';
import c15 from '../assets/images/Gallery/c15.jpeg';
import c16 from '../assets/images/Gallery/c16.jpeg';
import c17 from '../assets/images/Gallery/c17.jpeg';
import c18 from '../assets/images/Gallery/c18.jpeg';
import c19 from '../assets/images/Gallery/c19.jpeg';

// Group D: d1.jpeg ~ d14.jpeg (14개)
import d1 from '../assets/images/Gallery/d1.jpeg';
import d2 from '../assets/images/Gallery/d2.jpeg';
import d3 from '../assets/images/Gallery/d3.jpeg';
import d4 from '../assets/images/Gallery/d4.jpeg';
import d5 from '../assets/images/Gallery/d5.jpeg';
import d6 from '../assets/images/Gallery/d6.jpeg';
import d7 from '../assets/images/Gallery/d7.jpeg';
import d8 from '../assets/images/Gallery/d8.jpeg';
import d9 from '../assets/images/Gallery/d9.jpeg';
import d10 from '../assets/images/Gallery/d10.jpeg';
import d11 from '../assets/images/Gallery/d11.jpeg';
import d12 from '../assets/images/Gallery/d12.jpeg';
import d13 from '../assets/images/Gallery/d13.jpeg';
import d14 from '../assets/images/Gallery/d14.jpeg';

// Group E: e1.jpeg ~ e6.jpeg (6개)
import e1 from '../assets/images/Gallery/e1.jpeg';
import e2 from '../assets/images/Gallery/e2.jpeg';
import e3 from '../assets/images/Gallery/e3.jpeg';
import e4 from '../assets/images/Gallery/e4.jpeg';
import e5 from '../assets/images/Gallery/e5.jpeg';
import e6 from '../assets/images/Gallery/e6.jpeg';

// Group F: f1.jpeg ~ f4.jpeg (4개)
import f1 from '../assets/images/Gallery/f1.jpeg';
import f2 from '../assets/images/Gallery/f2.jpeg';
import f3 from '../assets/images/Gallery/f3.jpeg';
import f4 from '../assets/images/Gallery/f4.jpeg';

// Group G: g1.jpeg ~ g6.jpeg (6개)
import g1 from '../assets/images/Gallery/g1.jpeg';
import g2 from '../assets/images/Gallery/g2.jpeg';
import g3 from '../assets/images/Gallery/g3.jpeg';
import g4 from '../assets/images/Gallery/g4.jpeg';
import g5 from '../assets/images/Gallery/g5.jpeg';
import g6 from '../assets/images/Gallery/g6.jpeg';

// Group H-1: h1.jpeg ~ h3.jpeg (3개)
import h1 from '../assets/images/Gallery/h1.jpeg';
import h2 from '../assets/images/Gallery/h2.jpeg';
import h3 from '../assets/images/Gallery/h3.jpeg';

// Group H-2: h4.jpeg ~ h5.jpeg (2개)
import h4 from '../assets/images/Gallery/h4.jpeg';
import h5 from '../assets/images/Gallery/h5.jpeg';

// Group I: i1.jpeg ~ i21.jpeg (21개)
import i1 from '../assets/images/Gallery/i1.jpeg';
import i2 from '../assets/images/Gallery/i2.jpeg';
import i3 from '../assets/images/Gallery/i3.jpeg';
import i4 from '../assets/images/Gallery/i4.jpeg';
import i5 from '../assets/images/Gallery/i5.jpeg';
import i6 from '../assets/images/Gallery/i6.jpeg';
import i7 from '../assets/images/Gallery/i7.jpeg';
import i8 from '../assets/images/Gallery/i8.jpeg';
import i9 from '../assets/images/Gallery/i9.jpeg';
import i10 from '../assets/images/Gallery/i10.jpeg';
import i11 from '../assets/images/Gallery/i11.jpeg';
import i12 from '../assets/images/Gallery/i12.jpeg';
import i13 from '../assets/images/Gallery/i13.jpeg';
import i14 from '../assets/images/Gallery/i14.jpeg';
import i15 from '../assets/images/Gallery/i15.jpeg';
import i16 from '../assets/images/Gallery/i16.jpeg';
import i17 from '../assets/images/Gallery/i17.jpeg';
import i18 from '../assets/images/Gallery/i18.jpeg';
import i19 from '../assets/images/Gallery/i19.jpeg';
import i20 from '../assets/images/Gallery/i20.jpeg';
import i21 from '../assets/images/Gallery/i21.jpeg';

// ---------------------------------------------------------
// 각 그룹 데이터 정의
const groupA = { title: '전시장 사진', images: [
  { src: img1, caption: '시공 사례 1' },
  { src: img2, caption: '시공 사례 2' },
]};

const groupB = { title: '욕실 디자인', images: [
  { src: img3, caption: '시공 사례 3' },
  { src: img4, caption: '시공 사례 4' },
  { src: img5, caption: '시공 사례 5' },
  { src: img6, caption: '시공 사례 6' },
  { src: img7, caption: '시공 사례 7' },
  { src: img8, caption: '시공 사례 8' },
  { src: img9, caption: '시공 사례 9' },
  { src: img10, caption: '시공 사례 10' },
  { src: img11, caption: '시공 사례 11' },
  { src: img12, caption: '시공 사례 12' },
  { src: img13, caption: '시공 사례 13' },
  { src: img14, caption: '시공 사례 14' },
]};

const groupC = { title: '시공사례', images: [
  { src: c1, caption: '시공 사례 C1' },
  { src: c2, caption: '시공 사례 C2' },
  { src: c3, caption: '시공 사례 C3' },
  { src: c4, caption: '시공 사례 C4' },
  { src: c5, caption: '시공 사례 C5' },
  { src: c6, caption: '시공 사례 C6' },
  { src: c7, caption: '시공 사례 C7' },
  { src: c8, caption: '시공 사례 C8' },
  { src: c9, caption: '시공 사례 C9' },
  { src: c10, caption: '시공 사례 C10' },
  { src: c11, caption: '시공 사례 C11' },
  { src: c12, caption: '시공 사례 C12' },
  { src: c13, caption: '시공 사례 C13' },
  { src: c14, caption: '시공 사례 C14' },
  { src: c15, caption: '시공 사례 C15' },
  { src: c16, caption: '시공 사례 C16' },
  { src: c17, caption: '시공 사례 C17' },
  { src: c18, caption: '시공 사례 C18' },
  { src: c19, caption: '시공 사례 C19' },
]};

const groupD = { title: '충정로 피어리스 아파트 | 전체 리모델링 공사 (시공 전/후)', images: [
  { src: d1, caption: '시공 사례 D1' },
  { src: d2, caption: '시공 사례 D2' },
  { src: d3, caption: '시공 사례 D3' },
  { src: d4, caption: '시공 사례 D4' },
  { src: d5, caption: '시공 사례 D5' },
  { src: d6, caption: '시공 사례 D6' },
  { src: d7, caption: '시공 사례 D7' },
  { src: d8, caption: '시공 사례 D8' },
  { src: d9, caption: '시공 사례 D9' },
  { src: d10, caption: '시공 사례 D10' },
  { src: d11, caption: '시공 사례 D11' },
  { src: d12, caption: '시공 사례 D12' },
  { src: d13, caption: '시공 사례 D13' },
  { src: d14, caption: '시공 사례 D14' },
]};

const groupE = { title: '서울대학교 의생명 | 인조대리석 공사(시공 사진)', images: [
  { src: e1, caption: '시공 사례 E1' },
  { src: e2, caption: '시공 사례 E2' },
  { src: e3, caption: '시공 사례 E3' },
  { src: e4, caption: '시공 사례 E4' },
  { src: e5, caption: '시공 사례 E5' },
  { src: e6, caption: '시공 사례 E6' },
]};

const groupF = { title: '약수동 청산빌라 | 욕실 공사 (시공 전/후)', images: [
  { src: f1, caption: '시공 사례 F1' },
  { src: f2, caption: '시공 사례 F2' },
  { src: f3, caption: '시공 사례 F3' },
  { src: f4, caption: '시공 사례 F4' },
]};

const groupG = { title: '목동 금호아파트 | 욕실 공사 (시공 전/후)', images: [
  { src: g1, caption: '시공 사례 G1' },
  { src: g2, caption: '시공 사례 G2' },
  { src: g3, caption: '시공 사례 G3' },
  { src: g4, caption: '시공 사례 G4' },
  { src: g5, caption: '시공 사례 G5' },
  { src: g6, caption: '시공 사례 G6' },
]};

const groupH1 = { title: '포천 동교동 | 욕실2세트(시공후)H-1', images: [
  { src: h1, caption: '시공 사례 H1' },
  { src: h2, caption: '시공 사례 H2' },
  { src: h3, caption: '시공 사례 H3' },
]};

const groupH2 = { title: '포천 동교동 | 욕실2세트(시공후)H-2', images: [
  { src: h4, caption: '시공 사례 H4' },
  { src: h5, caption: '시공 사례 H5' },
]};

const groupI = { title: '블루하우징 욕실 시공 사진', images: [
  { src: i1, caption: '시공 사례 I1' },
  { src: i2, caption: '시공 사례 I2' },
  { src: i3, caption: '시공 사례 I3' },
  { src: i4, caption: '시공 사례 I4' },
  { src: i5, caption: '시공 사례 I5' },
  { src: i6, caption: '시공 사례 I6' },
  { src: i7, caption: '시공 사례 I7' },
  { src: i8, caption: '시공 사례 I8' },
  { src: i9, caption: '시공 사례 I9' },
  { src: i10, caption: '시공 사례 I10' },
  { src: i11, caption: '시공 사례 I11' },
  { src: i12, caption: '시공 사례 I12' },
  { src: i13, caption: '시공 사례 I13' },
  { src: i14, caption: '시공 사례 I14' },
  { src: i15, caption: '시공 사례 I15' },
  { src: i16, caption: '시공 사례 I16' },
  { src: i17, caption: '시공 사례 I17' },
  { src: i18, caption: '시공 사례 I18' },
  { src: i19, caption: '시공 사례 I19' },
  { src: i20, caption: '시공 사례 I20' },
  { src: i21, caption: '시공 사례 I21' },
]};

// ---------------------------------------------------------

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroup, setCurrentGroup] = useState([]);

  const openModal = useCallback((group, index) => {
    // URL 배열로 변환
    setCurrentGroup(group.map((img) => img.src));
    setCurrentIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentGroup.length - 1 : prev - 1
    );
  }, [currentGroup]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === currentGroup.length - 1 ? 0 : prev + 1
    );
  }, [currentGroup]);

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

  // 카드 및 오버레이 스타일
  const cardContainerStyle = {
    position: 'relative',
    border: '1px solid #eee',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    backgroundColor: '#fff',
  };

  // 모든 카드에서 이미지 높이를 350px로 고정
  const imageStyle = {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    display: 'block',
  };

  // 그리드 섹션 렌더링 함수 (오버레이 캡션 포함)
  // gridContainer 클래스명을 추가해 미디어 쿼리로 반응형 처리
  const renderGridSection = (group, columns, sectionIndex) => {
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '24px',
      margin: '0 auto',
    };
    return (
      <section style={{ padding: '48px 16px', backgroundColor: '#f4f4f4' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* 섹션 제목: 왼쪽 정렬 */}
          <h2 style={{ textAlign: 'left', fontSize: '1.5rem', marginBottom: '24px', fontWeight: '500' }}>
            {group.title}
          </h2>
          <div className="grid-container" style={gridStyle}>
            {group.images.map((image, index) => (
              <div
                key={index}
                className="card"
                style={cardContainerStyle}
                onClick={() => openModal(group.images, index)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  style={imageStyle}
                />
                {/* 오버레이 캡션 */}
                <div className="overlay" style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}>
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // 슬라이더 섹션 렌더링 함수
  const renderSliderSection = (group) => (
    <section style={{ padding: '48px 16px', backgroundColor: '#f4f4f4' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'left', fontSize: '1.5rem', marginBottom: '24px', fontWeight: '500' }}>
          {group.title}
        </h2>
        <div style={{ position: 'relative' }}>
          <ImageSlider images={group.images.map((img) => img.src)} interval={4000} />
        </div>
      </div>
    </section>
  );

  // 섹션 데이터 배열 (layout: 2, 3 또는 'slider')
  const sections = [
    { group: groupA, layout: 2 },
    { group: groupB, layout: 3 },
    { group: groupC, layout: 'slider' },
    { group: groupD, layout: 3 },
    { group: groupE, layout: 3 },
    { group: groupF, layout: 2 },
    { group: groupG, layout: 3 },
    { group: groupH1, layout: 3 },
    { group: groupH2, layout: 2 },
    { group: groupI, layout: 3 },
  ];

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* 배너 섹션 */}
      <div style={{ position: 'relative', width: '100%', height: '64vh', maxHeight: '500px' }}>
        <img
          src={bannerGallery}
          alt="Gallery Banner"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          padding: '16px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>갤러리</h1>
          <p style={{ fontSize: '1.8rem' }}>
            Gallery
          </p>
          <p style={{ fontSize: '1.25rem' }}>Our Latest Interior Projects</p>
        </div>
      </div>

      {/* 인라인 스타일을 통한 :hover 효과 및 미디어 쿼리 */}
      <style>{`
        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }
        .card:hover .overlay {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      {sections.map((section, index) =>
        section.layout === 'slider'
          ? renderSliderSection(section.group)
          : renderGridSection(section.group, section.layout, index)
      )}

      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          imgList={currentGroup}
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
