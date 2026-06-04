// src/sections/GallerySection.js
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

// 이미지 임포트 (추후 이미지 추가 시 여기만 관리)
import gallery1 from '../assets/images/Gallery/1.jpeg';
import gallery2 from '../assets/images/Gallery/2.jpeg';
import gallery3 from '../assets/images/Gallery/3.jpeg';
import gallery4 from '../assets/images/Gallery/4.jpeg';
import gallery5 from '../assets/images/Gallery/5.jpeg';
import gallery6 from '../assets/images/Gallery/6.jpeg';

const galleryImages = [
  { src: gallery1, alt: '시공 갤러리 이미지 1' },
  { src: gallery2, alt: '시공 갤러리 이미지 2' },
  { src: gallery3, alt: '시공 갤러리 이미지 3' },
  { src: gallery4, alt: '시공 갤러리 이미지 4' },
  { src: gallery5, alt: '시공 갤러리 이미지 5' },
  { src: gallery6, alt: '시공 갤러리 이미지 6' },
];

const GallerySection = () => (
  <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
    <div className="container-content">
      <SectionHeading title="갤러리" english="Our Projects" moreLink="/gallery" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <Link key={index} to="/gallery" className="group block">
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-44 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
