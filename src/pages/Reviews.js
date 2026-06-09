// src/pages/Reviews.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import reviews, { maskName } from '../data/reviews';
import bannerReviews from '../assets/images/slide1.webp';

const REVIEWS_PER_PAGE = 9;

const Reviews = () => {
  const [page, setPage] = useState(1);
  const listTopRef = useRef(null);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const pagedReviews = reviews.slice((page - 1) * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE);

  const goToPage = (next) => {
    setPage(next);
    listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>이용후기 | 블루하우징</title>
        <meta name="description" content="블루하우징에서 욕실·주택 리모델링을 진행한 고객들의 생생한 이용후기를 확인하세요." />
        <link rel="canonical" href="https://bluehousing.co.kr/reviews" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="블루하우징" />
        <meta property="og:title" content="이용후기 | 블루하우징" />
        <meta property="og:description" content="블루하우징에서 욕실·주택 리모델링을 진행한 고객들의 생생한 이용후기를 확인하세요." />
        <meta property="og:url" content="https://bluehousing.co.kr/reviews" />
        <meta property="og:image" content="https://bluehousing.co.kr/og-image.png" />
        <meta property="og:locale" content="ko_KR" />
      </Helmet>

      <PageHero
        image={bannerReviews}
        english="Reviews"
        title="이용후기"
        subtitle="블루하우징과 함께한 고객들의 진솔한 이야기"
      />

      <section className="py-14 md:py-20">
        <div className="container-content">
          {/* 고정 헤더에 가리지 않도록 scroll-mt 적용한 페이지네이션 스크롤 기준점 */}
          <div ref={listTopRef} className="scroll-mt-24 md:scroll-mt-28" aria-hidden="true" />
          <p className="text-xs text-ink-muted dark:text-gray-400 text-right mb-6">
            ※ 실제 고객 후기를 바탕으로 재구성한 내용입니다.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagedReviews.map((review, index) => (
            <div
              key={`${page}-${index}`}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-card p-7 flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <RiDoubleQuotesL className="text-3xl text-brand-100 absolute top-5 right-5" />
              <div className="flex text-accent-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <RiStarFill key={i} />
                ))}
              </div>
              <p className="text-ink-soft dark:text-gray-300 text-[15px] leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-ink/10 dark:border-gray-700 flex items-end justify-between gap-2">
                <div>
                  <span className="font-bold text-ink dark:text-gray-100">{maskName(review.name)}</span>
                  {review.location && (
                    <span className="block text-xs text-ink-muted dark:text-gray-400 mt-0.5">{review.location}</span>
                  )}
                </div>
                {review.date && (
                  <span className="text-xs text-ink-muted dark:text-gray-400 shrink-0">{review.date}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="후기 페이지">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="이전 페이지"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 dark:border-gray-600 text-ink-soft dark:text-gray-300 transition-colors hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 disabled:opacity-40 disabled:pointer-events-none"
            >
              <FiChevronLeft />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => goToPage(n)}
                aria-current={page === n ? 'page' : undefined}
                className={`h-10 w-10 rounded-full text-sm font-semibold transition-colors ${
                  page === n
                    ? 'bg-brand-600 text-white'
                    : 'border border-ink/15 dark:border-gray-600 text-ink-soft dark:text-gray-300 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="다음 페이지"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 dark:border-gray-600 text-ink-soft dark:text-gray-300 transition-colors hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 disabled:opacity-40 disabled:pointer-events-none"
            >
              <FiChevronRight />
            </button>
          </nav>
        )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container-content text-center">
          <p className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-3">Free Estimate</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            나도 이렇게 바꾸고 싶다면?
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            30년 경력 마이스터에게 무료로 견적을 받아보세요.
          </p>
          <Link
            to="/estimate"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-base font-semibold text-white shadow-card-hover transition-all hover:bg-accent-600 hover:scale-[1.03]"
          >
            무료 견적 받기 <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
