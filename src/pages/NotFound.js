// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiHome, FiArrowRight } from 'react-icons/fi';
import company from '../data/company';

const NotFound = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-24">
    <Helmet>
      <title>페이지를 찾을 수 없습니다 | 블루하우징</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <div className="text-center max-w-md">
      {/* 숫자 */}
      <p className="text-[120px] font-black leading-none text-brand-100 select-none">
        404
      </p>

      {/* 메시지 */}
      <h1 className="mt-2 text-2xl font-bold text-ink">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-3 text-ink-muted leading-relaxed">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.<br />
        아래 버튼으로 원하시는 곳으로 이동해 보세요.
      </p>

      {/* CTA 버튼 */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors shadow-soft"
        >
          <FiHome /> 홈으로 돌아가기
        </Link>
        <Link
          to="/estimate"
          className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-colors shadow-soft"
        >
          무료 견적 받기 <FiArrowRight />
        </Link>
      </div>

      {/* 전화 안내 */}
      <p className="mt-8 text-sm text-ink-muted">
        도움이 필요하시면{' '}
        <a
          href={`tel:${company.phone.raw}`}
          className="font-semibold text-brand-600 hover:underline"
        >
          {company.phone.display}
        </a>
        {' '}으로 연락주세요.
      </p>
    </div>
  </div>
);

export default NotFound;
