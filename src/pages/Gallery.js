// src/pages/Gallery.js
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// 이미지 데이터 배열 (파일들은 public/Gallery 폴더 내에 위치)
const galleryImages = [
  { src: '/Gallery/1.jpeg', caption: '시공 사례 1' },
  { src: '/Gallery/2.jpeg', caption: '시공 사례 2' },
  { src: '/Gallery/3.jpeg', caption: '시공 사례 3' },
  // ... 추가 이미지 객체: 예를 들어, { src: '/Gallery/4.jpeg', caption: '시공 사례 4' } 등
];

const fallbackImage = '/Gallery/fallback.png'; // 에러 발생 시 사용할 대체 이미지

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState({});

  // 이미지 로딩 에러 핸들러
  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">시공 사례</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow">
            <LazyLoad
              height={200}
              once
              placeholder={<div className="bg-gray-200 animate-pulse w-full h-48" />}
            >
              <img
                src={imageError[index] ? fallbackImage : image.src}
                alt={image.caption}
                className="w-full h-48 object-cover cursor-pointer"
                loading="lazy"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                onError={() => handleImageError(index)}
              />
            </LazyLoad>
            {/* 이미지 캡션 */}
            <div className="p-2 text-center text-sm text-gray-700">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={imageError[photoIndex] ? fallbackImage : galleryImages[photoIndex].src}
          nextSrc={
            imageError[(photoIndex + 1) % galleryImages.length]
              ? fallbackImage
              : galleryImages[(photoIndex + 1) % galleryImages.length].src
          }
          prevSrc={
            imageError[(photoIndex + galleryImages.length - 1) % galleryImages.length]
              ? fallbackImage
              : galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
          imageCaption={galleryImages[photoIndex].caption}
          enableZoom={false}
          reactModalStyle={{ overlay: { zIndex: 1000 } }}
        />
      )}
    </section>
  );
};

export default Gallery;
