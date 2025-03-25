import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';  // 대체 아이콘 임포트

// 이미지 임포트 (추후 이미지 추가 시 여기만 관리)
import gallery1 from '../assets/images/Gallery/gallery1.jpeg';
import gallery2 from '../assets/images/Gallery/gallery2.jpeg';
import gallery3 from '../assets/images/Gallery/gallery3.jpeg';
import gallery4 from '../assets/images/Gallery/gallery4.jpeg';
import gallery5 from '../assets/images/Gallery/gallery5.jpeg';
import gallery6 from '../assets/images/Gallery/gallery6.jpeg';

const galleryImages = [
  { src: gallery1, alt: '시공 사례 1' },
  { src: gallery2, alt: '시공 사례 2' },
  { src: gallery3, alt: '시공 사례 3' },
  { src: gallery4, alt: '시공 사례 4' },
  { src: gallery5, alt: '시공 사례 5' },
  { src: gallery6, alt: '시공 사례 6' },
];

const GallerySection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 
          className="text-3xl md:text-2xl font-semibold text-left"
          style={{ color: '#B08D57' }}  // 고급스러운 브라운 계열 색상
        >
          시공 사례
        </h2>
        <Link 
          to="/gallery"
          className="flex items-center text-sm px-3 py-1 rounded transition"
          style={{ color: '#B08D57' }}  // 고급스러운 브라운 계열 색상
        >
          더보기 <MdArrowForwardIos className="ml-1" />
        </Link>
      </div>
      <hr className="mb-8 border-t-2" style={{ borderColor: '#B08D57' }} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="group overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
