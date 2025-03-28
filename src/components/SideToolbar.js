// src/components/SideToolbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdBusinessCenter,
  MdDesignServices,
  MdStorefront,
  MdPhotoLibrary,
  MdArticle,
  MdAnnouncement,
  MdRequestQuote,
  MdRateReview,
  MdLocationOn,
  MdMenu,
  MdClose
} from 'react-icons/md';

const menuItems = [
  { label: '기업소개', english: 'About Us', link: '/about', icon: <MdBusinessCenter className="mr-2 text-2xl" /> },
  { label: '서비스', english: 'Services', link: '/services', icon: <MdDesignServices className="mr-2 text-2xl" /> },
  { label: '전시장', english: 'Showroom', link: '/showroom-detail', icon: <MdStorefront className="mr-2 text-2xl" /> },
  { label: '갤러리', english: 'Gallery', link: '/gallery', icon: <MdPhotoLibrary className="mr-2 text-2xl" /> },
  { label: '블로그', english: 'Blog', link: '/blog', icon: <MdArticle className="mr-2 text-2xl" /> },
  { label: '공지사항', english: 'Notices', link: '/notices', icon: <MdAnnouncement className="mr-2 text-2xl" /> },
  { label: '견적의뢰', english: 'Contact us', link: '/estimate', icon: <MdRequestQuote className="mr-2 text-2xl" /> },
  { label: '이용후기', english: 'Reviews', link: '/reviews', icon: <MdRateReview className="mr-2 text-2xl" /> },
  { label: '오시는길', english: 'Location', link: '/location', icon: <MdLocationOn className="mr-2 text-2xl" /> },
];

const SideToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 오른쪽 상단(약간 아래) 고정된 툴바 열기 버튼 */}
      <button 
        onClick={togglePanel} 
        className="fixed top-20 right-0 bg-gray-800 text-white p-4 rounded-l-xl z-50 hover:bg-gray-700 flex items-center"
      >
        <MdMenu className="text-3xl" />
      </button>

      {/* 배경 오버레이 (열려 있을 때만 보임) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={togglePanel}
        />
      )}

      {/* 사이드 패널 */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* 패널 헤더 */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-700">Blue Housing</h2>
          <button onClick={togglePanel} className="text-gray-600 hover:text-gray-800">
            <MdClose className="text-3xl" />
          </button>
        </div>

        {/* 패널 내 메뉴 리스트 */}
        <nav className="p-6 space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative block">
              <Link
                to={item.link}
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors text-xl py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
              <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-20 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                {item.english}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideToolbar;
