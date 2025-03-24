import React from 'react';
import estimateBg from '../assets/images/estimate-bg.jpg'; // 배경 이미지 경로 맞게 수정

const EstimateRequest = () => (
  <section 
    className="py-24 px-4 text-center bg-cover bg-center relative"
    style={{ backgroundImage: `url(${estimateBg})` }}
  >
    {/* 어두운 오버레이 (필요에 따라 투명도 조정 가능) */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* 내용 */}
    <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">견적 의뢰</h2>
      <p className="text-gray-200 mb-6 text-lg">전화번호: 02-393-9759</p>
      <a
        href="tel:023939759"
        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        전화로 견적 문의하기
      </a>
    </div>
  </section>
);

export default EstimateRequest;
