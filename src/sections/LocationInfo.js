import React from 'react';

const LocationInfo = () => (
  <section className="py-12 px-4 bg-white text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">오시는 길</h2>
    <div className="w-full h-64 md:h-96 mb-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=..."  // 실제 Google Maps 링크로 대체
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="location"
      ></iframe>
    </div>
    <p className="text-gray-700 mb-2">주소: 서울특별시 OO구 OO로 123</p>
    <p className="text-gray-700">연락처: 010-1234-5678</p>
  </section>
);

export default LocationInfo;
