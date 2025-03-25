// src/pages/Notice.js
import React from 'react';
import notice1 from '../assets/images/notice1.jpeg';
import notice2 from '../assets/images/notice2.jpeg';

// 간단한 체크 아이콘(예: Heroicons 경로)을 inline SVG로 사용
const CheckIcon = () => (
  <svg
    className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 11l3 3L22 4M5 12a7 7 0 1014 0 7 7 0 00-14 0z"
    />
  </svg>
);

// 이미지를 출력하는 재사용 컴포넌트
const NoticeImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-auto object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
  />
);

// 텍스트 섹션을 출력하는 재사용 컴포넌트
const NoticeSection = ({ title, durationText, additionalInfo }) => (
  <div className="space-y-2">
    <h2 className="text-2xl font-medium text-gray-800 flex items-center">
      <CheckIcon />
      {title}
    </h2>
    <p className="text-base text-gray-600 leading-relaxed">
      {durationText}
    </p>
    {additionalInfo && (
      <p className="text-sm text-gray-500 mt-1">{additionalInfo}</p>
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
    <main className="bg-gray-50 min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* 첫 번째 이미지 + 투명 오버레이(테두리 흰색) */}
        <div className="relative">
          <NoticeImage src={notice1} alt="공지사항 1" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-white px-4 py-2 rounded bg-transparent">
              <span className="text-white text-lg font-semibold">Blue Housing</span>
            </div>
          </div>
        </div>

        {/* 텍스트 콘텐츠 */}
        <article className="space-y-10">
          <h1 className="text-4xl font-semibold text-gray-900">
            [욕실공사] 효율적인 시공 프로세스
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            철거부터 마무리 청소까지, 체계적인 시공 단계를 소개합니다.<br />
            <span className="font-medium">
              철거 → 설비 → 방수 → 전기공사 → 타일 시공 → 천장 마감 → 
              욕실 도기 및 액세서리 설치 → 조명 시공 → 최종 청소
            </span>
          </p>

          <section className="space-y-8">
            {noticeSteps.map(({ title, durationText, additionalInfo }, index) => (
              <NoticeSection
                key={index}
                title={title}
                durationText={durationText}
                additionalInfo={additionalInfo}
              />
            ))}
          </section>
        </article>

        {/* 두 번째 이미지 + 투명 오버레이(테두리 흰색) */}
        <div className="relative">
          <NoticeImage src={notice2} alt="공지사항 2" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-white px-4 py-2 rounded bg-transparent">
              <span className="text-white text-lg font-semibold">Blue Housing</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notice;
