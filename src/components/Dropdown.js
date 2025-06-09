// src/components/Dropdown.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  MdBusiness, MdBuild, MdPhotoLibrary, MdConstruction, MdRssFeed,
  MdAnnouncement, MdRequestQuote, MdRateReview, MdLocationOn, MdKeyboardArrowDown
} from 'react-icons/md';

// 메뉴 아이템 정의 (아이콘 크기 통일)
const menuItems = [
  { label: '기업소개', link: '/about', icon: <MdBusiness className="inline-block mr-2 text-xl" /> },
  { label: '서비스', link: '/services', icon: <MdBuild className="inline-block mr-2 text-xl" /> },
  { label: '갤러리', link: '/gallery', icon: <MdPhotoLibrary className="inline-block mr-2 text-xl" /> },
  { label: '시공사례', link: '/cases', icon: <MdConstruction className="inline-block mr-2 text-xl" /> },
  { label: '블로그', link: '/blog', icon: <MdRssFeed className="inline-block mr-2 text-xl" /> },
  { label: '공지사항', link: '/notices', icon: <MdAnnouncement className="inline-block mr-2 text-xl" /> },
  { label: '견적의뢰', link: '/estimate', icon: <MdRequestQuote className="inline-block mr-2 text-xl" /> },
  { label: '이용후기', link: '/reviews', icon: <MdRateReview className="inline-block mr-2 text-xl" /> },
  { label: '오시는길', link: '/location', icon: <MdLocationOn className="inline-block mr-2 text-xl" /> },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null); // 버튼 ref 추가

  // 드롭다운 열고 닫는 함수
  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  // ESC 키로 드롭다운 닫기 및 포커스 관리
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
        buttonRef.current?.focus(); // 드롭다운 닫으면 버튼에 포커스
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeDropdown]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* 드롭다운 토글 버튼: 패딩 및 그림자 강화, 포커스 스타일 추가 */}
      {/* md:hidden 추가: 모바일에서는 이 드롭다운 버튼을 숨깁니다. */}
      <button
        ref={buttonRef} // ref 연결
        onClick={toggleDropdown}
        type="button" // HTML 버튼 타입 명시
        aria-haspopup="true" // 드롭다운 메뉴임을 알림
        aria-expanded={isOpen} // 현재 드롭다운 확장 상태
        className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 shadow 
                   text-base font-medium rounded-md bg-white text-gray-700 
                   hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   transition-all duration-200 ease-in-out md:hidden"
      >
        메뉴 <MdKeyboardArrowDown className={`ml-1 text-lg transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`} />
      </button>
      
      {isOpen && (
        <div 
          // 드롭다운 애니메이션 추가 (tailwind.config.js에 keyframes 필요)
          className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 
                     animate-fade-in-down"
          role="menu" // 메뉴 역할 명시
          aria-orientation="vertical" // 수직 메뉴
          tabIndex="-1" // 키보드 접근성을 위해 탭 인덱스 설정
        >
          <div className="py-1" role="none">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                // 메뉴 항목 호버 스타일 개선
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                onClick={closeDropdown}
                role="menuitem" // 메뉴 항목 역할 명시
                tabIndex={0} // 키보드 탐색 가능하도록
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