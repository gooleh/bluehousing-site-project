// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/logo.png';
import company from '../data/company';

const NAV_ITEMS = [
  { path: '/', label: '홈', en: 'Home' },
  { path: '/about', label: '기업소개', en: 'About' },
  { path: '/services', label: '서비스', en: 'Services' },
  { path: '/showroom-detail', label: '전시장', en: 'Showroom' },
  { path: '/gallery', label: '갤러리', en: 'Gallery' },
  { path: '/estimate', label: '견적문의', en: 'Estimate' },
  { path: '/location', label: '오시는길', en: 'Location' },
];

// 모바일 드로어 하단 보조 메뉴 (데스크톱은 푸터에서 접근)
const SECONDARY_ITEMS = [
  { path: '/blog', label: '블로그', en: 'Blog' },
  { path: '/notices', label: '공지사항', en: 'Notices' },
  { path: '/reviews', label: '이용후기', en: 'Reviews' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // 홈에서만 히어로 위 투명 헤더를 사용하고, 그 외 페이지는 항상 솔리드.
  const isHome = location.pathname === '/';
  const solid = !isHome || isScrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // 라우트 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // 모바일 메뉴 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const headerBg = solid
    ? 'bg-white/90 backdrop-blur-md shadow-header'
    : 'bg-gradient-to-b from-black/35 to-transparent';

  const linkColor = solid
    ? 'text-ink-soft hover:text-brand-600'
    : 'text-white/90 hover:text-white';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg} ${
          solid ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="container-content flex items-center justify-between gap-4">
          {/* 로고 */}
          <Link to="/" className="flex items-center shrink-0" aria-label="블루하우징 홈">
            <img
              src={logo}
              alt="Blue Housing"
              className={`w-auto transition-all duration-300 ${
                solid ? 'h-16 md:h-20' : 'h-16 md:h-20 brightness-0 invert drop-shadow-sm'
              }`}
            />
          </Link>

          {/* 데스크톱 내비게이션 */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative px-3.5 py-2 text-[17px] font-medium transition-colors ${linkColor} ${
                  isActive(item.path) ? (solid ? 'text-brand-700' : 'text-white') : ''
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-transform duration-300 origin-left ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
                {/* 호버 시 영문 툴팁 */}
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-medium text-white opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.en}
                </span>
              </Link>
            ))}
          </nav>

          {/* 우측 액션 */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${company.phone.raw}`}
              className={`hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                solid
                  ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-soft'
                  : 'bg-white/15 text-white ring-1 ring-white/40 backdrop-blur-sm hover:bg-white/25'
              }`}
            >
              <FiPhone className="text-base" />
              {company.phone.display}
            </a>

            {/* 모바일 메뉴 토글 */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden inline-flex items-center justify-center rounded-lg p-2 transition-colors ${
                solid ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/15'
              }`}
              aria-label="메뉴 열기"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 드로어 */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out-expo ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-ink/10">
            <img src={logo} alt="Blue Housing" className="h-14 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-2 text-ink hover:bg-ink/5"
              aria-label="메뉴 닫기"
            >
              <FiX className="text-2xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-baseline justify-between px-6 py-3.5 transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-700 bg-brand-50 font-semibold'
                    : 'text-ink-soft hover:bg-ink/5'
                }`}
              >
                <span className="text-lg">{item.label}</span>
                <span className="text-xs uppercase tracking-wider text-ink-muted">
                  {item.en}
                </span>
              </Link>
            ))}

            <div className="mx-6 my-2 border-t border-ink/10" />

            {SECONDARY_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-baseline justify-between px-6 py-2.5 transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-700 font-semibold'
                    : 'text-ink-muted hover:bg-ink/5'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs uppercase tracking-wider text-ink-muted/70">
                  {item.en}
                </span>
              </Link>
            ))}
          </nav>

          <div className="p-5 border-t border-ink/10">
            <a
              href={`tel:${company.phone.raw}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-white font-semibold hover:bg-brand-700 transition-colors"
            >
              <FiPhone /> {company.phone.display} 전화 상담
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
