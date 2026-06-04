// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Wrench, ShieldCheck, BadgeDollarSign, Sparkles, Check, Newspaper, Trophy } from 'lucide-react';
import { RiUser3Line, RiCalendarLine, RiMapPin2Line, RiGlobalLine, RiPhoneLine } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import company from '../data/company';
import banner1 from '../assets/images/slide1.webp';
import ab1 from '../assets/images/ab1.webp';
import ab2 from '../assets/images/ab2.webp';

const CREDENTIALS = [
  '하청 없는 대표 직접 시공 — 처음부터 끝까지 마이스터가 책임',
  'MBC · 조선일보 · 랜드하우스 · 업계 전문지 4곳 언론 보도',
  '시공 완료 후 무상 A/S 즉시 지원',
  '10,000건 이상의 욕실·주택 리모델링 실적',
];

const STATS = [
  { num: '30년+', label: '시공 경력' },
  { num: '10,000+', label: '시공 사례' },
  { num: '100%', label: '책임 A/S' },
  { num: '4개사', label: '언론 보도' },
];

const VALUES = [
  {
    icon: Wrench,
    color: 'bg-brand-700',
    title: '대표 직접 시공',
    desc: '하청 없이 30년 경력의 대표 마이스터가 설계부터 마감까지 직접 현장을 책임집니다.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-brand-600',
    title: '책임 A/S 보장',
    desc: '시공이 끝난 후에도 문제가 생기면 즉시 달려갑니다. 끝까지 책임지는 것이 블루하우징의 원칙입니다.',
  },
  {
    icon: BadgeDollarSign,
    color: 'bg-accent-600',
    title: '투명한 견적',
    desc: '숨겨진 추가 비용 없이 처음 제시한 견적 그대로 시공합니다. 합리적이고 정직한 가격을 약속드립니다.',
  },
  {
    icon: Sparkles,
    color: 'bg-accent-500',
    title: '고객 맞춤 설계',
    desc: '획일적인 시공이 아닌, 고객의 생활 방식과 취향을 반영한 공간을 함께 만들어갑니다.',
  },
];

const INFO = [
  { icon: RiUser3Line, label: '대표자', value: company.owner },
  { icon: RiCalendarLine, label: '설립', value: '2012년 (2018년 법인전환)' },
  { icon: RiPhoneLine, label: '대표번호', value: company.phone.display, href: `tel:${company.phone.raw}` },
  { icon: RiMapPin2Line, label: '주소', value: company.roadAddress },
  { icon: RiGlobalLine, label: '홈페이지', value: 'bluehousing.co.kr', href: 'https://bluehousing.co.kr' },
];

const About = () => (
  <div className="bg-white">
    <Helmet>
      <title>기업소개 | 블루하우징</title>
      <meta name="description" content="30년 경력 마이스터가 직접 시공하는 블루하우징. 하청 없는 책임 시공, 투명한 견적, 완벽한 A/S로 고객의 공간을 완성합니다." />
      <link rel="canonical" href="https://bluehousing.co.kr/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="블루하우징" />
      <meta property="og:title" content="기업소개 | 블루하우징" />
      <meta property="og:description" content="30년 경력 마이스터가 직접 시공하는 블루하우징. 하청 없는 책임 시공, 투명한 견적, 완벽한 A/S로 고객의 공간을 완성합니다." />
      <meta property="og:url" content="https://bluehousing.co.kr/about" />
      <meta property="og:image" content="https://bluehousing.co.kr/logo512.png" />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>

    <PageHero
      image={banner1}
      english="About Us"
      title="기업소개"
      subtitle="30년 경력 마이스터가 직접 책임지는 종합 인테리어 전문기업"
    />

    {/* ===== 마이스터 소개 ===== */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* 왼쪽: 텍스트 */}
          <div>
            <span className="inline-flex items-center gap-2 text-accent-600 text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-4 h-4" /> Master Craftsman
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tightish">
              30년의 현장 경험,<br />직접 책임지는 시공
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed">
              블루하우징 대표 <strong className="text-ink">이존경</strong>은 욕실·인테리어 분야에서
              30년 이상 현장을 진두지휘해온 마이스터입니다. 대형 업체의 하청 구조 없이,
              대표가 직접 설계부터 마감까지 현장을 관리합니다.
            </p>
            <p className="mt-4 text-ink-soft text-lg leading-relaxed">
              LG화학 욕실팀과 한샘 신규 사업팀장으로 욕실사업을 총괄한 전문가로서,
              업계 최고 수준의 자재 지식과 사업 운영 노하우를 갖추고 있습니다.
            </p>
            <ul className="mt-8 space-y-3">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-600">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-ink-soft text-[15px] leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽: 스탯 카드 2×2 */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-brand-50 border border-brand-100 p-7 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-700 tracking-tightish">
                  {s.num}
                </div>
                <div className="mt-2 text-sm text-ink-muted font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ===== 언론 보도 배지 ===== */}
    <div className="border-y border-ink/8 bg-gray-50 py-6">
      <div className="container-content flex flex-wrap items-center justify-center gap-3 md:gap-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted mr-2 hidden sm:block">
          언론 보도
        </span>
        {['MBC 뉴스', '조선일보', '랜드하우스', '업계 전문지'].map((media) => (
          <span
            key={media}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-1.5 text-sm font-semibold text-ink-soft shadow-soft"
          >
            <Newspaper className="w-3.5 h-3.5 text-accent-500" />
            {media}
          </span>
        ))}
      </div>
    </div>

    {/* ===== 시공 현장 이미지 ===== */}
    <section className="py-16 md:py-20 bg-white">
      <div className="container-content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-ink/5">
          <img src={ab1} alt="블루하우징 쇼룸 전시장 내부" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
        </div>
        <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-ink/5">
          <img src={ab2} alt="블루하우징 욕실 리모델링 시공 현장" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
        </div>
      </div>
    </section>

    {/* ===== 블루하우징이 다른 이유 ===== */}
    <section className="py-16 md:py-24 bg-brand-950">
      <div className="container-content">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">Our Values</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">블루하우징이 다른 이유</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, color, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} mb-6 shadow-card group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== 회사 정보 ===== */}
    <section className="py-16 md:py-20 bg-white">
      <div className="container-content">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-ink mb-8 text-center">회사 정보</h2>
          <div className="rounded-2xl border border-ink/8 overflow-hidden divide-y divide-ink/8">
            {INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="w-4 h-4 text-brand-600" />
                </div>
                <span className="w-20 text-sm font-semibold text-ink-muted flex-shrink-0">{label}</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-brand-700 hover:underline break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-ink-soft break-all">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ===== CTA ===== */}
    <section className="bg-brand-900 py-16 md:py-20">
      <div className="container-content text-center">
        <p className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-3">Free Estimate</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          30년 경력 마이스터에게 직접 상담받으세요
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          현장 방문 견적부터 시공까지, 처음부터 끝까지 함께합니다.
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

export default About;
