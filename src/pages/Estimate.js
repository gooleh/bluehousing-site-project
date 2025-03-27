// src/pages/Estimate.js
import React, { useState } from 'react';
// 예시 배너 이미지 import
import bannerEstimate from '../assets/images/banner/banner1.png';

const Estimate = () => {
  // 폼 입력값을 상태로 관리
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: '',
  });

  // 상태 변경 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 폼 제출 시 처리할 로직 (예: API 요청)
  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 환경에서는 이 부분에서 서버로 견적 요청 데이터를 전송
    console.log('견적 요청 데이터:', formData);
    // 폼 초기화 등 후속 작업
    // setFormData({ name: '', phone: '', email: '', details: '' });
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* 배너 섹션 */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={bannerEstimate}
          alt="Estimate Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow">
            견적 의뢰 / Request for Estimate
          </h2>
          <p className="max-w-xl text-sm md:text-base drop-shadow-sm">
          When you complete the form below, we will contact you with a quick draft.
          </p>
        </div>
      </div>

      {/* 폼 영역 */}
      <div className="max-w-3xl mx-auto -mt-12 px-4 pb-16 relative z-10">
        <div className="bg-white rounded shadow p-8">
          {/* 안내 문구 */}
          <p className="text-gray-700 mb-8 text-center">
            아래 양식에 맞춰 정보를 입력해 주시면 빠른 시일 내에 연락드리겠습니다.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이름 입력 */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                성함 <span className="text-sm text-gray-500">(Name)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예) 홍길동 / e.g. Hong Gil-dong"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* 연락처 입력 */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                연락처 <span className="text-sm text-gray-500">(Mobile)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예) 010-1234-5678 / e.g. 010-1234-5678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* 이메일 입력 */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                이메일 <span className="text-sm text-gray-500">(Email address)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예) example@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* 상세 내용 */}
            <div>
              <label htmlFor="details" className="block text-gray-700 font-medium mb-2">
                문의/요청 사항 <span className="text-sm text-gray-500">(Inquiries or Questions)</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows="5"
                className="w-full border border-gray-300 rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="시공 위치, 희망 일정, 예산 등 자세한 내용을 알려주세요."
                value={formData.details}
                onChange={handleChange}
              />
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded 
                         transition-all duration-200"
            >
              견적 요청 보내기
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Estimate;
