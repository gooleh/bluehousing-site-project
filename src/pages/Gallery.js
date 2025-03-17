import React from 'react';

const Gallery = () => {
  // 실제 이미지 URL 또는 로컬 파일 경로로 대체
  const images = [
    'https://via.placeholder.com/600x400?text=Gallery+Image+1',
    'https://via.placeholder.com/600x400?text=Gallery+Image+2',
    'https://via.placeholder.com/600x400?text=Gallery+Image+3',
    'https://via.placeholder.com/600x400?text=Gallery+Image+4',
    'https://via.placeholder.com/600x400?text=Gallery+Image+5',
    'https://via.placeholder.com/600x400?text=Gallery+Image+6'
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">갤러리</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
