import React from 'react';

const galleryImages = [
  '/assets/images/gallery1.jpg',
  '/assets/images/gallery2.jpg',
  '/assets/images/gallery3.jpg',
  '/assets/images/gallery4.jpg',
  '/assets/images/gallery5.jpg',
  '/assets/images/gallery6.jpg',
];

const Gallery = () => (
  <section className="py-12 px-4 bg-gray-50">
    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">시공 사례</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {galleryImages.map((src, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow">
          <img
            src={src}
            alt={`시공 사례 ${index + 1}`}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
