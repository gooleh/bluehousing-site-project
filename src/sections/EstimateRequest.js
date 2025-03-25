import React from 'react';
import { Link } from 'react-router-dom';
import estimateBg from '../assets/images/slide3.png'; // 배경 이미지 경로 맞게 수정

const EstimateRequest = () => (
  <Link to="/estimate" className="block">
    <section 
      className="py-32 px-8 w-full text-center bg-cover bg-center relative cursor-pointer"
      style={{ backgroundImage: `url(${estimateBg})` }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 내용 */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">견적 의뢰</h2>
        <p className="text-gray-200 mb-6 text-lg">전화번호: 02-393-9759</p>
      </div>
    </section>
  </Link>
);

export default EstimateRequest;
