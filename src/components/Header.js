// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isArticles = location.pathname.startsWith('/articles');
  const isNotice = location.pathname === '/notices';
  const effectiveScrolled = isArticles || isNotice || isScrolled;

  useEffect(() => {
    if (!isArticles && !isNotice) {
      const onScroll = () => setIsScrolled(window.scrollY > 100);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [isArticles, isNotice]);

  // 특정 경로에서 로고 숨기기
  const hideLogoPaths = ['/showroom-detail', '/reviews'];
  const shouldHideLogo = hideLogoPaths.includes(location.pathname);

  // showroom-detail 및 estimate 페이지 여부 체크
  const isShowroomDetail = location.pathname === '/showroom-detail';
  const isEstimate = location.pathname === '/estimate';

  // gallery, blog, reviews 페이지에서 네비게이션 텍스트를 흰색으로 적용
  const isGallery = location.pathname.startsWith('/gallery');
  const isBlog = location.pathname.startsWith('/blog');
  const isReviews = location.pathname.startsWith('/reviews');
  const isWhiteNav = isEstimate || isGallery || isBlog || isReviews;

  const headerClass = effectiveScrolled
    ? 'bg-gray-800 shadow-lg py-2'
    : 'bg-transparent py-5';

  // 메뉴 텍스트 색상 설정
  const menuTextClass = isShowroomDetail
    ? 'text-gray-300 hover:text-blue-300'
    : isWhiteNav || effectiveScrolled
      ? 'text-white hover:text-blue-300'
      : 'text-gray-800 hover:text-blue-500';

  const navPaths = [
    '/',            
    '/about',       
    '/services',    
    '/showroom-detail',     
    '/gallery',       
    '/estimate',    
    '/location'     
  ];

  const navLabels = [
    '홈',
    '기업소개',
    '서비스',
    '전시장',
    '갤러리',
    '견적문의',
    '오시는길'
  ];

  const navEnglishLabels = [
    'Home',
    'About us',
    'Services',
    'Exhibition',
    'Showroom',
    'Contact us',
    'Location'
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 items-center">
        {/* 왼쪽 공간 */}
        <div className="col-start-1" />

        {/* 가운데 로고 */}
        {!shouldHideLogo && (
          <div className="col-start-2 flex justify-center">
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

        {/* 오른쪽 영역: 데스크톱 메뉴 */}
        <div className="col-start-3 flex items-center justify-end">
          <ul className="hidden md:flex space-x-6 whitespace-nowrap ml-8">
            {navPaths.map((path, idx) => (
              <li key={idx} className="group relative">
                <Link
                  to={path}
                  className={`font-medium text-lg transition duration-100 ${menuTextClass}`}
                >
                  {navLabels[idx]}
                </Link>
                <span className="absolute left-1/2 transform -translate-x-1/2 -top-10 px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {navEnglishLabels[idx]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
