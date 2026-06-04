// src/components/QuickContact.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiEdit3, FiArrowUp, FiMessageSquare } from 'react-icons/fi';
import { SiNaver } from 'react-icons/si';
import company from '../data/company';
import { trackCall, trackEstimateClick } from '../utils/analytics';

/**
 * 전 디바이스 빠른 연락 수단.
 * - 데스크톱: 화면 우측 세로 플로팅 버튼 + 맨위로
 * - 모바일: 하단 고정 액션바(전화 / 견적 / 블로그)
 */
const QuickContact = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ===== 데스크톱: 우측 세로 플로팅 ===== */}
      <div className="hidden md:flex fixed right-5 bottom-6 z-40 flex-col items-end gap-2.5">
        <a
          href={`tel:${company.phone.raw}`}
          onClick={() => trackCall('desktop_floating')}
          className="group flex items-center gap-2 rounded-full bg-brand-600 pl-4 pr-4 py-3 text-white shadow-card-hover transition-all hover:bg-brand-700 hover:pr-5"
        >
          <FiPhone className="text-xl" />
          <span className="text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[7rem] group-hover:opacity-100">
            전화 상담
          </span>
        </a>

        <Link
          to="/estimate"
          onClick={() => trackEstimateClick('desktop_floating')}
          className="group flex items-center gap-2 rounded-full bg-accent-500 pl-4 pr-4 py-3 text-white shadow-card-hover transition-all hover:bg-accent-600 hover:pr-5"
        >
          <FiEdit3 className="text-xl" />
          <span className="text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[7rem] group-hover:opacity-100">
            견적 문의
          </span>
        </Link>

        <a
          href={company.sns.naverBlog}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-[#03c75a] pl-4 pr-4 py-3 text-white shadow-card-hover transition-all hover:brightness-95 hover:pr-5"
        >
          <SiNaver className="text-lg" />
          <span className="text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[7rem] group-hover:opacity-100">
            블로그
          </span>
        </a>

        <a
          href={company.sns.talkTalk}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-[#03c75a] pl-4 pr-4 py-3 text-white shadow-card-hover transition-all hover:brightness-95 hover:pr-5"
        >
          <FiMessageSquare className="text-xl" />
          <span className="text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[7rem] group-hover:opacity-100">
            톡톡 상담
          </span>
        </a>

        <button
          onClick={scrollToTop}
          aria-label="맨 위로"
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-ink-soft dark:text-gray-300 ring-1 ring-ink/10 dark:ring-gray-600 shadow-card transition-all hover:bg-ink hover:text-white ${
            showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <FiArrowUp className="text-xl" />
        </button>
      </div>

      {/* ===== 모바일: 하단 고정 액션바 ===== */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-ink/10 dark:border-gray-700 shadow-[0_-4px_20px_-8px_rgba(16,28,51,0.25)]">
        <a
          href={`tel:${company.phone.raw}`}
          onClick={() => trackCall('mobile_bar')}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft dark:text-gray-300 active:bg-ink/5 dark:active:bg-white/5"
        >
          <FiPhone className="text-xl text-brand-600" />
          <span className="text-xs font-medium">전화 상담</span>
        </a>
        <Link
          to="/estimate"
          onClick={() => trackEstimateClick('mobile_bar')}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft dark:text-gray-300 active:bg-ink/5 dark:active:bg-white/5 border-x border-ink/10 dark:border-gray-700"
        >
          <FiEdit3 className="text-xl text-accent-500" />
          <span className="text-xs font-medium">견적 문의</span>
        </Link>
        <a
          href={company.sns.talkTalk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft dark:text-gray-300 active:bg-ink/5 dark:active:bg-white/5 border-r border-ink/10 dark:border-gray-700"
        >
          <FiMessageSquare className="text-xl text-[#03c75a]" />
          <span className="text-xs font-medium">톡톡 상담</span>
        </a>
        <a
          href={company.sns.naverBlog}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft dark:text-gray-300 active:bg-ink/5 dark:active:bg-white/5"
        >
          <SiNaver className="text-lg text-[#03c75a]" />
          <span className="text-xs font-medium">블로그</span>
        </a>
      </div>

      {/* 모바일 하단바 높이만큼 맨위로 버튼 (스크롤 시) */}
      <button
        onClick={scrollToTop}
        aria-label="맨 위로"
        className={`md:hidden fixed right-4 bottom-20 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink/80 text-white shadow-card-hover backdrop-blur-sm transition-opacity ${
          showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FiArrowUp className="text-lg" />
      </button>
    </>
  );
};

export default QuickContact;
