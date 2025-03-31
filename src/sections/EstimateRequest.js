// src/components/EstimateRequest.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiPhoneFill, RiArrowRightUpLine } from 'react-icons/ri';
import estimateBg from '../assets/images/slide3.webp'; // 배너 이미지 경로

const EstimateRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCall = () => {
    window.location.href = 'tel:02-393-9759';
  };

  const handleNavigate = () => {
    navigate('/estimate');
  };

  return (
    <>
      {/* 배너 섹션: 클릭 시 모달 열기 */}
      <div onClick={handleClick} className="block cursor-pointer">
        <section 
          className="py-32 px-8 w-full text-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${estimateBg})` }}
        >
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* 배너 내용 */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-white">
              견적 의뢰
            </h2>
            <p className="text-white text-base mb-6">
              Contact us
            </p>
            <p className="text-white mb-6 text-lg">
              전화번호: 02-393-9759
            </p>
          </div>
        </section>
      </div>

      {/* 모달 창 */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* 모달 오버레이 */}
          <div 
            className="absolute inset-0 bg-black opacity-50" 
            onClick={() => setShowModal(false)}
          ></div>

          {/* 모달 콘텐츠 - 투명한 글라스모르피즘 스타일 */}
          <div className="relative z-10 max-w-md mx-auto p-8 rounded-lg border border-white/30 bg-white/20 backdrop-blur-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-white text-center">
              원하시는 작업을 선택해주세요
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition duration-200"
              >
                <RiPhoneFill className="text-2xl" />
                전화 연결
              </button>
              <button
                onClick={handleNavigate}
                className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition duration-200"
              >
                <RiArrowRightUpLine className="text-2xl" />
                견적문의 페이지 이동
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EstimateRequest;
