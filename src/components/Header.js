// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 기존 코드: articles 페이지 처리
  const isArticles = location.pathname.startsWith('/articles');

  // 추가 코드: notice 페이지 처리
  const isNotice = location.pathname === '/notices';

  // 두 조건 중 하나라도 true이면 항상 스크롤 상태로
  const effectiveScrolled = isArticles || isNotice || isScrolled;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // 이미 isArticles 또는 isNotice가 true면 스크롤 리스너 필요 X
    if (!isArticles && !isNotice) {
      const onScroll = () => setIsScrolled(window.scrollY > 100);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [isArticles, isNotice]);

  // 필요에 따라 로고 숨기는 예시
  const hideLogoPaths = ['/showroom-detail'];
  const shouldHideLogo = hideLogoPaths.includes(location.pathname);

  // effectiveScrolled에 따라 다른 스타일 적용
  const headerClass = effectiveScrolled
    ? 'bg-gray-800 shadow-lg py-2'
    : 'bg-transparent py-5';

  const menuTextClass = effectiveScrolled
    ? 'text-white hover:text-blue-300'
    : 'text-gray-800 hover:text-blue-500';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 items-center">
        <div />

        {/* 로고 */}
        {!shouldHideLogo && (
          <div
            className={`${
              effectiveScrolled ? 'col-start-1 justify-start' : 'col-start-2 justify-center'
            } flex transition-all duration-100`}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Blue Housing Logo"
                className={`transition-all duration-100 ${
                  effectiveScrolled ? 'h-12 md:h-14' : 'h-24 md:h-28'
                }`}
              />
            </Link>
          </div>
        )}

        {/* 네비게이션 */}
        <nav className="col-start-3 flex justify-end">
          <ul className="hidden md:flex space-x-8">
            {['/', '/about', '/services', '/gallery', '/contact'].map((path, idx) => {
              const labels = ['홈', '기업소개', '서비스', '갤러리', '연락처'];
              return (
                <li key={idx}>
                  <Link
                    to={path}
                    className={`font-medium transition duration-100 ${menuTextClass}`}
                  >
                    {labels[idx]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden focus:outline-none transition duration-100 ${menuTextClass}`}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white w-full px-6 py-4 space-y-4 transition duration-100">
          {['/', '/about', '/services', '/gallery', '/contact'].map((path, idx) => {
            const labels = ['홈', '기업소개', '서비스', '갤러리', '연락처'];
            return (
              <li key={idx}>
                <Link
                  to={path}
                  className="block font-medium text-gray-800 hover:text-gray-600 transition duration-100"
                >
                  {labels[idx]}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Header;
