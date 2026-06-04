// src/pages/Home.js
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ImageSlider from '../components/ImageSlider';
import SectionWrapper from '../components/SectionWrapper';
import { FiArrowRight, FiPhone, FiChevronDown } from 'react-icons/fi';
import company from '../data/company';
import AlternatingText from '../components/AlternatingText';

// 슬라이드 이미지 임포트
import slide1 from '../assets/images/slide1.webp';
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';
import slide4 from '../assets/images/slide4.webp';

// Sections - Lazy 로딩 적용
const WhyUs = lazy(() => import('../sections/WhyUs'));
const ShowroomIntro = lazy(() => import('../sections/ShowroomIntro'));
const GallerySection = lazy(() => import('../sections/GallerySection'));
const ReviewsSection = lazy(() => import('../sections/ReviewsSection'));
const MediaCoverage = lazy(() => import('../sections/MediaCoverage'));
const SNSLinks = lazy(() => import('../sections/SNSLinks'));
const Notices = lazy(() => import('../sections/Notices'));
const EstimateRequest = lazy(() => import('../sections/EstimateRequest'));

const slideImages = [slide1, slide2, slide3, slide4];
const slideAlts = [
  '블루하우징 욕실 리모델링 시공 사례',
  '블루하우징 주택 인테리어 시공 사례',
  '블루하우징 실내 마감 시공 사례',
  '블루하우징 전시장 및 시공 품질',
];

const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>블루하우징 | 30년 경력 마이스터의 종합 인테리어 전문기업</title>
        <meta
          name="description"
          content="블루하우징은 30년 경력 마이스터가 책임 시공하는 종합 인테리어 전문기업입니다. 욕실·주택 리모델링, 실내장식, 건축 컨설팅까지 책임 시공과 A/S를 보장합니다."
        />
      </Helmet>

      {/* ===== 히어로 ===== */}
      <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        <ImageSlider
          images={slideImages}
          imageAlts={slideAlts}
          interval={5000}
          heightClass="h-full"
          overlayGradient
          showDots
        />

        {/* 히어로 콘텐츠 */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-5 pointer-events-none">
          <span className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-accent-200 animate-fade-in">
            Blue Housing
          </span>
          <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-tightish drop-shadow-lg animate-fade-up">
            공간의 가치를 높이는<br className="sm:hidden" /> 30년 경력의 손길
          </h1>
          <AlternatingText
            className="mt-5 max-w-xl mx-auto text-center animate-fade-up"
            itemClassName="text-base md:text-xl text-white/90 leading-relaxed drop-shadow"
            interval={10000}
            items={[
              '마이스터가 직접 책임 시공하는 종합 인테리어 전문기업입니다. 욕실·주택 리모델링부터 실내장식까지, 끝까지 책임집니다.',
              'A comprehensive interior company led by a 30-year master craftsman — from bathroom and home remodeling to interior finishing, responsible from start to finish.',
            ]}
          />

          {/* CTA */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3 pointer-events-auto animate-fade-up">
            <Link
              to="/estimate"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-white shadow-card-hover transition-all hover:bg-accent-600 hover:scale-[1.03]"
            >
              무료 견적 받기
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${company.phone.raw}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/50 backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <FiPhone />
              {company.phone.display}
            </a>
          </div>
        </div>

        {/* 스크롤 안내 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 hidden md:block animate-bounce text-white/70">
          <FiChevronDown className="text-3xl" />
        </div>
      </section>

      {/* ===== 신뢰 지표 바 ===== */}
      <div className="bg-brand-900 text-white">
        <div className="container-content grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { num: '30년+', label: '시공 경력' },
            { num: '10,000+', label: '시공 사례' },
            { num: '100%', label: '책임 시공 · A/S' },
            { num: '4대', label: '언론 보도' },
          ].map((stat) => (
            <div key={stat.label} className="py-7 text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent-300">{stat.num}</div>
              <div className="mt-1 text-xs md:text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-ink-muted">로딩 중...</div>}>
        <SectionWrapper><WhyUs /></SectionWrapper>
        <SectionWrapper><ShowroomIntro /></SectionWrapper>
        <SectionWrapper><GallerySection /></SectionWrapper>
        <SectionWrapper><ReviewsSection /></SectionWrapper>
        <SectionWrapper><MediaCoverage /></SectionWrapper>
        <SectionWrapper><SNSLinks /></SectionWrapper>
        <SectionWrapper><Notices /></SectionWrapper>
        <SectionWrapper><EstimateRequest /></SectionWrapper>
      </Suspense>
    </div>
  );
};

export default Home;
