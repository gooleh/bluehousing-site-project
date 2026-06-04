// src/sections/EstimateRequest.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiPhoneFill, RiArrowRightUpLine } from 'react-icons/ri';
import estimateBg from '../assets/images/slide3.webp';
import company from '../data/company';

const EstimateRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = `tel:${company.phone.raw}`;
  };

  const handleNavigate = () => {
    navigate('/estimate');
  };

  return (
    <>
      {/* CTA 배너 */}
      <section
        onClick={() => setShowModal(true)}
        className="relative cursor-pointer bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${estimateBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 to-brand-800/70" />

        <div className="relative z-10 container-content py-24 md:py-32 text-center">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent-300">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tightish">
            지금 무료로 견적을 받아보세요
          </h2>
          <p className="mt-4 text-white/85 text-base md:text-lg">
            30년 경력 마이스터가 직접 상담해 드립니다.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-lg font-bold text-white shadow-card-hover transition-transform hover:scale-105">
            <RiPhoneFill className="text-2xl" /> {company.phone.display}
          </div>
        </div>
      </section>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-card-hover">
            <h3 className="text-xl font-bold mb-6 text-ink dark:text-gray-100 text-center">
              원하시는 방법을 선택해 주세요
            </h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleCall}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-white font-semibold transition-colors hover:bg-brand-700"
              >
                <RiPhoneFill className="text-xl" /> 전화 상담 연결
              </button>
              <button
                onClick={handleNavigate}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-brand-600 px-5 py-3.5 text-brand-700 dark:text-brand-300 font-semibold transition-colors hover:bg-brand-50 dark:hover:bg-brand-900/30"
              >
                <RiArrowRightUpLine className="text-xl" /> 견적문의 페이지로 이동
              </button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-5 w-full text-center text-sm text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-gray-200"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EstimateRequest;
