import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isArticles = location.pathname.startsWith('/articles');
  const effectiveScrolled = isArticles ? true : isScrolled;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (!isArticles) {
      const handleScroll = () => setIsScrolled(window.scrollY > 100);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isArticles]);

  const hideLogoPaths = ['/showroom-detail'];
  const shouldHideLogo = hideLogoPaths.includes(location.pathname);

  const headerClass = effectiveScrolled 
    ? 'bg-gray-800 shadow-lg py-2 md:py-3'
    : 'bg-white py-4 md:py-6';

  const menuTextClass = effectiveScrolled 
    ? 'text-white hover:text-blue-300' 
    : 'text-gray-800 hover:text-blue-500';
  const hamburgerTextClass = effectiveScrolled 
    ? 'text-white' 
    : 'text-gray-800';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerClass}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center ${effectiveScrolled ? 'justify-between' : 'justify-center'} relative transition-all duration-500`}>

        {/* 로고 */}
        {!shouldHideLogo && (
          effectiveScrolled ? (
            // 스크롤 후: 왼쪽 정렬, 작아짐
            <div className="flex items-center">
              <Link to="/" className="transition-all duration-500">
                <img 
                  src={logo} 
                  alt="Blue Housing Logo" 
                  className="h-12 md:h-14 w-auto transition-all duration-500"
                />
              </Link>
            </div>
          ) : (
            // 스크롤 전: 중앙 배치, 큼
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
              <Link to="/" className="transition-all duration-500">
                <img 
                  src={logo} 
                  alt="Blue Housing Logo" 
                  className="h-24 md:h-28 mt-2 w-auto transition-all duration-500"
                />
              </Link>
            </div>
          )
        )}

        {/* 메뉴 */}
        <nav className={`flex-1 flex ${effectiveScrolled ? 'justify-end' : 'justify-end'} pr-4 md:pr-8 transition-all duration-500`}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden focus:outline-none ${hamburgerTextClass}`}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
          <ul className={`md:flex md:space-x-8 absolute md:static left-0 w-full md:w-auto transition-all duration-300 ${
            isOpen ? 'top-14 opacity-100' : 'top-[-300px] opacity-0'
          } md:opacity-100 ${effectiveScrolled ? 'bg-gray-800 md:bg-transparent' : 'bg-white md:bg-transparent'}`}>
            {['/', '/about', '/services', '/gallery', '/contact'].map((path, idx) => {
              const labels = ['홈', '기업소개', '서비스', '갤러리', '연락처'];
              return (
                <li key={idx} className="border-b md:border-none">
                  <Link 
                    to={path} 
                    className={`block px-4 py-1 md:py-0 font-medium transition-all duration-300 ${menuTextClass}`}
                  >
                    {labels[idx]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
