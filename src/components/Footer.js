// src/components/Footer.js
import React from 'react';
import {
  FaFacebookF, FaBuilding, FaUser, FaUniversity, FaMoneyCheckAlt, FaCoffee, FaUsers,
  FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapPin, FaIdCard // FaMapPin, FaIdCard 아이콘 추가 임포트
} from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
// import { toast } from 'react-toastify'; // 토스트 알림을 사용하려면 'react-toastify' 설치 및 주석 해제

const Footer = () => {
  const copyAccount = () => {
    navigator.clipboard.writeText('01120104196753');
    // react-toastify를 설치했다면 아래 주석을 해제하고 alert 대신 사용하세요.
    // toast.success('계좌번호가 복사되었습니다!', {
    //   position: "bottom-center",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
    alert('계좌번호가 복사되었습니다.'); // react-toastify를 사용하지 않는 경우
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-800 to-black text-gray-300 pt-16 pb-10 md:pt-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 lg:gap-x-20">

        {/* 회사 정보 섹션 */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
            <FaBuilding className="text-blue-400" /> 주식회사블루하우징
          </h2>
          <ul className="text-sm leading-relaxed space-y-2">
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaUser className="mr-2 text-base" /> 담당자:</span>
              <span className="text-white">이존경</span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaMapPin className="mr-2 text-base" /> 주소:</span>
              <span className="text-white">서울 서대문구 충정로2가 180-5 라인빌딩 1층</span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaIdCard className="mr-2 text-base" /> 사업자:</span>
              <span className="text-white">629-88-01069</span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaPhoneAlt className="mr-2 text-base" /> 전화:</span>
              <a href="tel:02-393-9759" className="text-blue-300 hover:text-white transition-colors duration-200">02-393-9759</a>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaEnvelope className="mr-2 text-base" /> 이메일:</span>
              <a href="mailto:astarblue@naver.com" className="text-blue-300 hover:text-white transition-colors duration-200">astarblue@naver.com</a>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaPhoneAlt className="mr-2 text-base" /> 기타:</span>
              <a href="tel:010-2264-9759" className="text-blue-300 hover:text-white transition-colors duration-200">010-2264-9759</a>
            </li>
          </ul>
        </div>

        {/* SNS 섹션 */}
        <div className="space-y-4 md:ml-6">
          <h3 className="text-white font-bold text-xl mb-4 border-b border-gray-700 pb-2">SNS</h3>
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
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-300 transition-all duration-200 hover:scale-[1.03] text-base group"
                >
                  <span className="text-xl group-hover:text-blue-300 transition-colors duration-200">{icon}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 계좌정보 섹션 */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl mb-4 border-b border-gray-700 pb-2">계좌정보</h3>
          <div className="bg-gray-700 bg-opacity-60 rounded-lg p-5 space-y-3 text-sm border border-gray-600">
            <div className="flex justify-between items-center pb-2 border-b border-gray-600">
              <div className="flex items-center text-gray-400"><FaUser className="mr-2 text-base" /> 예금주</div>
              <span className="text-white font-medium">주식회사블루하우징</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-600">
              <div className="flex items-center text-gray-400"><FaUniversity className="mr-2 text-base" /> 입금은행</div>
              <span className="text-white font-medium">국민은행</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-400"><FaMoneyCheckAlt className="mr-2 text-base" /> 계좌번호</div>
              <span className="text-white font-medium">01120104196753</span>
            </div>
            <button
              onClick={copyAccount}
              className="w-full mt-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-md py-2 text-base font-medium transition-colors duration-200 shadow-md"
            >
              계좌번호 복사
            </button>
          </div>
        </div>
      </div>

      {/* 하단 저작권 텍스트 */}
      <div className="mt-14 border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Blue Housing. All rights reserved.
      </div>

      {/* 상단 이동 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg 
                   transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        aria-label="상단으로 이동"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;