import React from 'react';
import { FaFacebookF, FaBuilding, FaUser, FaUniversity, FaMoneyCheckAlt, FaCoffee, FaUsers } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-6">
        
        {/* 회사 정보 */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <FaBuilding className="text-white text-xl" />
            <span className="text-white font-bold text-xl">주식회사블루하우징</span>
          </div>
          <div className="text-sm leading-relaxed space-y-2">
            <p>
              <strong>담당자:</strong> 이존경
            </p>
            <p>
              <strong>주소:</strong> 서울시 서대문구 충정로2가 180-5 라인빌딩 1층 (주차장계단2층)
            </p>
            <p>
              <strong>사업자등록번호:</strong> 629-88-01069
            </p>
            <p>
              <strong>전화번호:</strong> <a href="tel:02-393-9759" className="hover:text-white transition-colors duration-200">02-393-9759</a>
            </p>
            <p>
              <strong>이메일:</strong> <a href="mailto:astarblue@naver.com" className="hover:text-white transition-colors duration-200">astarblue@naver.com</a>
            </p>
            <p>
              <strong>기타 연락처:</strong> 핸드폰: <a href="tel:010-2264-9759" className="hover:text-white transition-colors duration-200">010-2264-9759</a>
            </p>
          </div>
        </div>

        {/* SNS 링크 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">SNS</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <a
                href="https://blog.naver.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-white transition transform hover:scale-105"
              >
                <SiNaver className="w-6 h-6" />
                <span className="ml-2 text-sm">네이버 블로그</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a
                href="https://cafe.naver.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-white transition transform hover:scale-105"
              >
                <FaCoffee className="w-6 h-6" />
                <span className="ml-2 text-sm">네이버 카페</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-white transition transform hover:scale-105"
              >
                <FaFacebookF className="w-6 h-6" />
                <span className="ml-2 text-sm">페이스북</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a
                href="https://band.us/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-white transition transform hover:scale-105"
              >
                <FaUsers className="w-6 h-6" />
                <span className="ml-2 text-sm">네이버 밴드</span>
              </a>
            </li>
          </ul>
        </div>

        {/* 계좌정보 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">계좌정보</h3>
          <div className="bg-gray-700 bg-opacity-50 rounded p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <FaUser className="mr-2 text-gray-400 w-5 h-5" />
                <span className="text-gray-400">예금주</span>
              </div>
              <span className="text-white text-sm">주식회사블루하우징</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <FaUniversity className="mr-2 text-gray-400 w-5 h-5" />
                <span className="text-gray-400">입금은행</span>
              </div>
              <span className="text-white text-sm">국민은행</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <FaMoneyCheckAlt className="mr-2 text-gray-400 w-5 h-5" />
                <span className="text-gray-400">계좌번호</span>
              </div>
              <span className="text-white text-sm">01120104196753</span>
            </div>
          </div>
        </div>

      </div>
      <div className="text-center text-xs text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Blue Housing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
