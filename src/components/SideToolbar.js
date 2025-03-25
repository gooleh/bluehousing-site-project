// src/components/SideToolbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdBusiness,
  MdBuild,
  MdPhotoLibrary,
  MdConstruction,
  MdRssFeed,
  MdAnnouncement,
  MdRequestQuote,
  MdRateReview,
  MdLocationOn,
  MdMenu,
  MdClose
} from 'react-icons/md';

const menuItems = [
  { label: '기업소개', link: '/about', icon: <MdBusiness className="mr-2 text-2xl" /> },
  { label: '서비스', link: '/services', icon: <MdBuild className="mr-2 text-2xl" /> },
  { label: '갤러리', link: '/gallery', icon: <MdPhotoLibrary className="mr-2 text-2xl" /> },
  { label: '시공사례', link: '/cases', icon: <MdConstruction className="mr-2 text-2xl" /> },
  { label: '블로그', link: '/blog', icon: <MdRssFeed className="mr-2 text-2xl" /> },
  { label: '공지사항', link: '/notices', icon: <MdAnnouncement className="mr-2 text-2xl" /> },
  { label: '견적의뢰', link: '/estimate', icon: <MdRequestQuote className="mr-2 text-2xl" /> },
  { label: '이용후기', link: '/reviews', icon: <MdRateReview className="mr-2 text-2xl" /> },
  { label: '오시는길', link: '/location', icon: <MdLocationOn className="mr-2 text-2xl" /> },
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
          onClick={togglePanel} // 오버레이 클릭 시 패널 닫기
        />
      )}

      {/* 실제 사이드 패널 */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* 패널 헤더 (닫기 버튼) */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-700">Blue Housing</h2>
          <button onClick={togglePanel} className="text-gray-600 hover:text-gray-800">
            <MdClose className="text-3xl" />
          </button>
        </div>

        {/* 패널 내 메뉴 리스트 */}
        <nav className="p-6 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center text-gray-700 hover:text-blue-500 transition-colors text-xl py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideToolbar;
