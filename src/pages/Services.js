// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ShowerHead, Home, PaintBucket,
  MessageCircle, Ruler, Lightbulb,
  FileText, HardHat, ThumbsUp, ShieldCheck,
} from 'lucide-react';
import { FiArrowRight } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import servicesBanner from '../assets/images/slide3.webp';
import service1 from '../assets/images/services/service1.webp';
import service2 from '../assets/images/services/service2.webp';
import service3 from '../assets/images/services/service3.webp';

const SERVICES = [
  {
    icon: Home,
    imgSrc: service1,
    title: '주택·아파트 리모델링',
    tag: 'Home Remodeling',
    description:
      '주방, 거실, 침실을 아우르는 전체 또는 부분 리모델링. 공간의 구조와 생활 패턴을 반영한 맞춤 설계로 집의 가치와 생활 만족도를 동시에 높여드립니다.',
    points: ['전체·부분 리모델링', '구조 맞춤 설계', '마감재 선정 컨설팅'],
  },
  {
    icon: ShowerHead,
    imgSrc: service2,
    title: '욕실 리모델링',
    tag: 'Bathroom Remodeling',
    description:
      '노후된 욕실을 고급스럽고 기능적인 공간으로 탈바꿈합니다. UBR 전면 재시공부터 부분 교체까지, 방수·마감 노하우와 최신 트렌드를 담아 책임 시공합니다.',
    points: ['UBR 전면 재시공', '방수·타일 전문 시공', '수전·위생도기 교체'],
  },
  {
    icon: PaintBucket,
    imgSrc: service3,
    title: '실내장식 & 건축 컨설팅',
    tag: 'Interior & Consulting',
    description:
      '벽지·바닥·조명 등 실내장식부터 상업 공간 인테리어, 건축 자재 선정 컨설팅까지. 30년 마이스터의 안목으로 공간에 가장 잘 맞는 솔루션을 제안합니다.',
    points: ['벽지·바닥·조명 시공', '상업 공간 인테리어', '건축 자재 컨설팅'],
  },
];

const PROCESS = [
  { step: '01', icon: MessageCircle, title: '상담 / 문의',    desc: '요구사항과 예산 범위를 파악하며 초기 상담을 진행합니다.' },
  { step: '02', icon: Ruler,         title: '현장 실측',     desc: '공간 구조와 치수를 정확히 파악해 최적화된 설계 데이터를 확보합니다.' },
  { step: '03', icon: Lightbulb,     title: '디자인 제안',   desc: '트렌드를 반영한 디자인 시안, 자재, 색상을 종합적으로 제안합니다.' },
  { step: '04', icon: FileText,      title: '계약 / 일정',   desc: '최종 견적·디자인 확정 후 공사 일정 및 계약을 체결합니다.' },
  { step: '05', icon: HardHat,       title: '시공 및 관리',  desc: '전문 시공팀이 체계적인 공정·안전·품질 관리를 실시합니다.' },
  { step: '06', icon: ThumbsUp,      title: '완료 / A/S',   desc: '시공 완결점검 후 고객에게 인도하며, 문제 발생 시 즉시 지원합니다.' },
];

const GUARANTEES = [
  { icon: ShieldCheck, title: '보증 기간 내 무상 수리', desc: '시공 완료 후 하자 발생 시 보증 기간 내 무료로 수리해 드립니다.' },
  { icon: HardHat,     title: '안전 기준 엄수',         desc: '모든 시공 과정에서 안전 기준을 엄격히 준수합니다.' },
  { icon: ThumbsUp,    title: '즉시 A/S 출동',          desc: '문제가 생기면 전화 한 통으로 빠르게 달려갑니다.' },
];

const Services = () => (
  <div className="bg-white dark:bg-gray-900">
    <Helmet>
      <title>서비스 | 블루하우징</title>
      <meta name="description" content="욕실·주택 리모델링, 실내장식, 건축 컨설팅까지. 블루하우징의 체계적인 시공 프로세스와 책임 A/S를 확인하세요." />
      <link rel="canonical" href="https://bluehousing.co.kr/services" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="블루하우징" />
      <meta property="og:title" content="서비스 | 블루하우징" />
      <meta property="og:description" content="욕실·주택 리모델링, 실내장식, 건축 컨설팅까지. 블루하우징의 체계적인 시공 프로세스와 책임 A/S를 확인하세요." />
      <meta property="og:url" content="https://bluehousing.co.kr/services" />
      <meta property="og:image" content="https://bluehousing.co.kr/og-image.png" />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>

    <PageHero
      image={servicesBanner}
      english="Our Services"
      title="서비스"
      subtitle="당신의 공간을 새롭게, 블루하우징만의 손길로 완성해드립니다."
    />

    {/* ===== 서비스 카드 ===== */}
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-content space-y-8 md:space-y-6">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          const isEven = i % 2 === 0;
          return (
            <div
              key={s.title}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 ${
                isEven ? '' : 'lg:[direction:rtl]'
              }`}
            >
              {/* 이미지 */}
              <div className="relative overflow-hidden h-64 lg:h-auto min-h-[280px] lg:[direction:ltr]">
                <img
                  src={s.imgSrc}
                  alt={`블루하우징 ${s.title} 시공 사례`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30">
                  {s.tag}
                </span>
              </div>

              {/* 텍스트 */}
              <div className="flex flex-col justify-center p-8 md:p-12 bg-white dark:bg-gray-800 lg:[direction:ltr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink dark:text-gray-100 mb-4 tracking-tightish">{s.title}</h2>
                <p className="text-ink-muted dark:text-gray-400 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink-soft dark:text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* ===== 시공 프로세스 ===== */}
    <section className="py-16 md:py-24 bg-brand-950">
      <div className="container-content">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">Process</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">시공 프로세스</h2>
          <p className="mt-3 text-white/60 text-sm">상담부터 A/S까지 6단계로 완성됩니다</p>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* 연결선 (데스크톱) */}
          <div className="absolute top-10 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-white/10 hidden lg:block" />

          {PROCESS.map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              {/* 스텝 서클 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white/5 border border-white/15 mb-4 group hover:bg-brand-700 hover:border-brand-500 transition-all duration-300">
                  <span className="text-[10px] font-bold text-accent-400 mb-0.5">{step}</span>
                  <Icon className="w-7 h-7 text-white/80" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== 안심 보증 ===== */}
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-content">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">Guarantee</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-ink dark:text-gray-100">안심 보증</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUARANTEES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-card text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-900/30 mx-auto mb-5">
                <Icon className="w-8 h-8 text-brand-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-ink dark:text-gray-100 mb-2">{title}</h3>
              <p className="text-sm text-ink-muted dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== CTA ===== */}
    <section className="bg-brand-900 py-16 md:py-20">
      <div className="container-content text-center">
        <p className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-3">Free Estimate</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          어떤 공간을 바꾸고 싶으신가요?
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          30년 경력 마이스터에게 무료로 상담·견적을 받아보세요.
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

export default Services;
