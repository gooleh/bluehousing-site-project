// src/pages/Notice.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import notice1 from '../assets/images/notice1.jpeg';
import notice2 from '../assets/images/notice2.jpeg';
import bannerImage from '../assets/images/slide2.webp';

const CheckIcon = () => (
  <svg
    className="w-6 h-6 mr-2 text-brand-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 11l3 3L22 4M5 12a7 7 0 1014 0 7 7 0 00-14 0z"
    />
  </svg>
);

const NoticeImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-auto object-cover rounded-2xl shadow-card"
    loading="lazy"
  />
);

const NoticeSection = ({ title, durationText, additionalInfo }) => (
  <div className="space-y-2">
    <h2 className="text-xl md:text-2xl font-semibold text-ink dark:text-gray-100 flex items-center">
      <CheckIcon />
      {title}
    </h2>
    <p className="text-base text-ink-soft dark:text-gray-300 leading-relaxed">{durationText}</p>
    {additionalInfo && (
      <p className="text-sm text-ink-muted dark:text-gray-400 mt-1">{additionalInfo}</p>
    )}
  </div>
);

const Notice = () => {
  const noticeSteps = [
    {
      title: '타일 덧방 시공',
      durationText: '총 3일 소요: 철거 1일 → 타일 시공 1일 → 욕실기구 설치 1일',
    },
    {
      title: '부분 철거 시공',
      durationText: '총 4일 소요: 철거 1일 → 방수 1일 → 타일 시공 1일 → 욕실기구 설치 1일',
    },
    {
      title: '전체 철거 시공',
      durationText: '총 4~5일 소요: 철거 1일 → 방수 1~2일 → 타일 시공 1일 → 욕실기구 설치 1일',
      additionalInfo: '(※ 욕실 크기와 일정에 따라 기간이 달라질 수 있습니다.)',
    },
  ];

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>공지사항 | 블루하우징</title>
        <meta
          name="description"
          content="블루하우징 욕실 공사 시공 프로세스와 예상 일정 안내. 타일 덧방, 부분·전체 철거 시공별 소요 기간을 확인하세요."
        />
      </Helmet>

      <PageHero
        image={bannerImage}
        english="Notices"
        title="시공 프로세스 안내"
        subtitle="철거부터 마무리까지, 단계별 예상 일정을 안내합니다."
      />

      <div className="container-content py-12 md:py-16 space-y-16">
        <div className="relative">
          <NoticeImage src={notice1} alt="욕실 시공 프로세스 안내 이미지 1" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border-2 border-white px-4 py-2 rounded bg-transparent">
              <span className="text-white text-lg font-semibold drop-shadow-md">Blue Housing</span>
            </div>
          </div>
        </div>

        <article className="space-y-10 max-w-3xl mx-auto">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink dark:text-gray-100">
              [욕실공사] 효율적인 시공 프로세스
            </h2>
            <p className="mt-4 text-lg text-ink-soft dark:text-gray-300 leading-relaxed">
              철거부터 마무리 청소까지, 체계적인 시공 단계를 소개합니다.
              <br />
              <span className="font-medium text-ink dark:text-gray-100">
                철거 → 설비 → 방수 → 전기공사 → 타일 시공 → 천장 마감 → 욕실 도기 및 액세서리 설치 → 조명 시공 → 최종 청소
              </span>
            </p>
          </div>

          <section className="space-y-8">
            {noticeSteps.map(({ title, durationText, additionalInfo }) => (
              <NoticeSection
                key={title}
                title={title}
                durationText={durationText}
                additionalInfo={additionalInfo}
              />
            ))}
          </section>
        </article>

        <div className="relative">
          <NoticeImage src={notice2} alt="욕실 시공 프로세스 안내 이미지 2" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border-2 border-white px-4 py-2 rounded bg-transparent">
              <span className="text-white text-lg font-semibold drop-shadow-md">Blue Housing</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notice;
