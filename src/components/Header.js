import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 페이지 전환 시 메뉴 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2 md:py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative transition-all duration-500 px-6">

        {/* 로고 - 상단 정중앙에 absolute로 고정 */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
          <Link to="/" className="flex items-center transition-all duration-500">
            <img 
              src={logo} 
              alt="Blue Housing Logo" 
              className={`transition-all duration-500 ${
                isScrolled ? 'h-12 md:h-14 mt-2' : 'h-20 md:h-24 mt-4'
              } w-auto`}
            />
          </Link>
        </div>

        {/* 메뉴 */}
        <nav className="relative flex-1 flex justify-end">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-gray-800"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>

          <ul className={`md:flex md:space-x-6 absolute md:static left-0 w-full md:w-auto transition-all duration-500 ${
            isOpen ? 'top-14 opacity-100' : 'top-[-300px] opacity-0'
          } md:opacity-100 bg-white md:bg-transparent`}>
            {['/', '/about', '/services', '/gallery', '/contact'].map((path, index) => {
              const labels = ['홈', '기업소개', '서비스', '갤러리', '연락처'];
              return (
                <li key={index} className="border-b md:border-none">
                  <Link 
                    to={path} 
                    className="block px-4 py-1 md:py-0 text-gray-800 hover:text-blue-500 font-medium transition-all duration-300"
                  >
                    {labels[index]}
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
