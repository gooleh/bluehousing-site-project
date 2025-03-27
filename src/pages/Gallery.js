// src/pages/Gallery.js
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// 100장이 넘는 이미지 URL 배열 (예시)
const galleryImages = [
  '/assets/images/gallery1.jpg',
  '/assets/images/gallery2.jpg',
  '/assets/images/gallery3.jpg',
  // ... 97개 이상의 이미지 URL 추가
];

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">시공 사례</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((src, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow">
            <LazyLoad height={200} once>
              <img
                src={src}
                alt={`시공 사례 ${index + 1}`}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                loading="lazy"
              />
            </LazyLoad>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex]}
          nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
          prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
        />
      )}
    </section>
  );
};

export default Gallery;
