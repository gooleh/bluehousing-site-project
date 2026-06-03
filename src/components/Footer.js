// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaBuilding, FaUser, FaUniversity, FaMoneyCheckAlt, FaCoffee, FaUsers,
  FaPhoneAlt, FaEnvelope, FaMapPin, FaIdCard
} from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import company, { activeSnsLinks } from '../data/company';

const SNS_ICONS = {
  naverBlog: <SiNaver />,
  naverCafe: <FaCoffee />,
  facebook: <FaFacebookF />,
  band: <FaUsers />,
};

const QUICK_LINKS = [
  { to: '/about', label: '기업소개' },
  { to: '/services', label: '서비스' },
  { to: '/showroom-detail', label: '전시장' },
  { to: '/gallery', label: '갤러리' },
  { to: '/blog', label: '블로그' },
  { to: '/notices', label: '공지사항' },
  { to: '/reviews', label: '이용후기' },
  { to: '/estimate', label: '견적문의' },
  { to: '/location', label: '오시는길' },
];
// import { toast } from 'react-toastify'; // 토스트 알림을 사용하려면 'react-toastify' 설치 및 주석 해제

const Footer = () => {
  const copyAccount = () => {
    navigator.clipboard.writeText(company.account.number);
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <footer className="relative bg-gradient-to-br from-brand-900 via-brand-950 to-ink text-gray-300 pt-16 pb-10 md:pt-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 lg:gap-x-12">

        {/* 회사 정보 섹션 */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-4 border-b border-white/15 pb-2">
            <FaBuilding className="text-accent-400" /> {company.nameKo}
          </h2>
          <ul className="text-sm leading-relaxed space-y-2">
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaUser className="mr-2 text-base" /> 담당자:</span>
              <span className="text-white">{company.owner}</span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaMapPin className="mr-2 text-base" /> 주소:</span>
              <span className="text-white">{company.roadAddress}</span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaIdCard className="mr-2 text-base" /> 사업자:</span>
              <span className="text-white">{company.bizNumber}</span>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaPhoneAlt className="mr-2 text-base" /> 전화:</span>
              <a href={`tel:${company.phone.raw}`} className="text-accent-300 hover:text-white transition-colors duration-200">{company.phone.display}</a>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaEnvelope className="mr-2 text-base" /> 이메일:</span>
              <a href={`mailto:${company.email}`} className="text-accent-300 hover:text-white transition-colors duration-200">{company.email}</a>
            </li>
            <li className="flex items-start">
              <span className="min-w-[60px] text-gray-400 font-semibold flex items-center"><FaPhoneAlt className="mr-2 text-base" /> 기타:</span>
              <a href={`tel:${company.mobile.raw}`} className="text-accent-300 hover:text-white transition-colors duration-200">{company.mobile.display}</a>
            </li>
          </ul>
        </div>

        {/* 바로가기 섹션 */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl mb-4 border-b border-white/15 pb-2">바로가기</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {QUICK_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex items-center text-gray-300 hover:text-accent-300 transition-colors duration-200"
                >
                  <span className="mr-2 text-accent-400">›</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SNS 섹션 */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl mb-4 border-b border-white/15 pb-2">SNS</h3>
          <ul className="space-y-3">
            {activeSnsLinks.map(({ href, label, key }) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent-300 transition-all duration-200 hover:translate-x-1 text-base group"
                >
                  <span className="text-xl group-hover:text-accent-300 transition-colors duration-200">
                    {SNS_ICONS[key]}
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 계좌정보 섹션 */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl mb-4 border-b border-white/15 pb-2">계좌정보</h3>
          <div className="bg-white/5 rounded-xl p-5 space-y-3 text-sm border border-white/10">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <div className="flex items-center text-gray-400"><FaUser className="mr-2 text-base" /> 예금주</div>
              <span className="text-white font-medium">{company.account.holder}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <div className="flex items-center text-gray-400"><FaUniversity className="mr-2 text-base" /> 입금은행</div>
              <span className="text-white font-medium">{company.account.bank}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-400"><FaMoneyCheckAlt className="mr-2 text-base" /> 계좌번호</div>
              <span className="text-white font-medium">{company.account.number}</span>
            </div>
            <button
              onClick={copyAccount}
              className="w-full mt-3 bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white rounded-lg py-2 text-base font-medium transition-colors duration-200 shadow-md"
            >
              계좌번호 복사
            </button>
          </div>
        </div>
      </div>

      {/* 하단 저작권 텍스트 */}
      <div className="mt-14 border-t border-white/10 pt-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {company.nameKo}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;