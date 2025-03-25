// src/components/Dropdown.js
import React, { useState, useRef, useEffect } from 'react';
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
  MdKeyboardArrowDown 
} from 'react-icons/md';

const menuItems = [
  { label: '기업소개', link: '/about', icon: <MdBusiness className="inline-block mr-2" /> },
  { label: '서비스', link: '/services', icon: <MdBuild className="inline-block mr-2" /> },
  { label: '갤러리', link: '/gallery', icon: <MdPhotoLibrary className="inline-block mr-2" /> },
  { label: '시공사례', link: '/cases', icon: <MdConstruction className="inline-block mr-2" /> },
  { label: '블로그', link: '/blog', icon: <MdRssFeed className="inline-block mr-2" /> },
  { label: '공지사항', link: '/notices', icon: <MdAnnouncement className="inline-block mr-2" /> },
  { label: '견적의뢰', link: '/estimate', icon: <MdRequestQuote className="inline-block mr-2" /> },
  { label: '이용후기', link: '/reviews', icon: <MdRateReview className="inline-block mr-2" /> },
  { label: '오시는길', link: '/location', icon: <MdLocationOn className="inline-block mr-2" /> },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* 크기를 키운 드롭다운 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-5 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        메뉴 <MdKeyboardArrowDown className="ml-1 text-lg" />
      </button>
      
      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
