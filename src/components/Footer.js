import React from 'react';
import {
  FaFacebookF, FaBuilding, FaUser, FaUniversity, FaMoneyCheckAlt, FaCoffee, FaUsers,
  FaArrowUp
} from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

const Footer = () => {
  const copyAccount = () => {
    navigator.clipboard.writeText('01120104196753');
    alert('계좌번호가 복사되었습니다.');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-800 to-black text-gray-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-10">

        {/* 회사 정보 */}
        <div className="space-y-3">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white">
            <FaBuilding /> 주식회사블루하우징
          </h2>
          <ul className="text-sm leading-relaxed space-y-1.5">
            <li><strong>담당자:</strong> 이존경</li>
            <li><strong>주소:</strong> 서울 서대문구 충정로2가 180-5 라인빌딩 1층</li>
            <li><strong>사업자등록번호:</strong> 629-88-01069</li>
            <li><strong>전화번호:</strong> <a href="tel:02-393-9759" className="hover:text-white">02-393-9759</a></li>
            <li><strong>이메일:</strong> <a href="mailto:astarblue@naver.com" className="hover:text-white">astarblue@naver.com</a></li>
            <li><strong>기타 연락처:</strong> <a href="tel:010-2264-9759" className="hover:text-white">010-2264-9759</a></li>
          </ul>
        </div>

        {/* SNS */}
        <div className="space-y-4 md:ml-6">
          <h3 className="text-white font-bold text-lg mb-1">SNS</h3>
          <ul className="space-y-3">
            {[
              { href: 'https://blog.naver.com/jkleeht', icon: <SiNaver />, label: '네이버 블로그' },
              { href: 'https://cafe.naver.com/', icon: <FaCoffee />, label: '네이버 카페' },
              { href: 'https://www.facebook.com/', icon: <FaFacebookF />, label: '페이스북' },
              { href: 'https://band.us/', icon: <FaUsers />, label: '네이버 밴드' },
            ].map(({ href, icon, label }, i) => (
              <li key={i}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 hover:text-white transition hover:scale-[1.02] text-sm"
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 계좌정보 */}
        <div className="space-y-3">
          <h3 className="text-white font-bold text-lg mb-1">계좌정보</h3>
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4 space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-400"><FaUser className="mr-1.5" /> 예금주</div>
              <span className="text-white">주식회사블루하우징</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-400"><FaUniversity className="mr-1.5" /> 입금은행</div>
              <span className="text-white">국민은행</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-400"><FaMoneyCheckAlt className="mr-1.5" /> 계좌번호</div>
              <span className="text-white">01120104196753</span>
            </div>
            <button
              onClick={copyAccount}
              className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md py-1.5 text-sm font-medium"
            >
              계좌번호 복사
            </button>
          </div>
        </div>
      </div>

      {/* 하단 텍스트 */}
      <div className="mt-14 border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Blue Housing. All rights reserved.
      </div>

      {/* 상단 이동 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-transform hover:scale-105"
        aria-label="상단으로 이동"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
