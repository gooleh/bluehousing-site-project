import React from 'react';
import { Helmet } from 'react-helmet-async';

// react-icons 라이브러리에서 아이콘 가져오기
import {
  // 회사 개요
  RiBuilding3Line,  // 회사 관련
  RiUser3Line,      // 대표자
  RiBook3Line,      // 산업 / 기업구분 등 일반 정보
  RiCalendarLine,   // 설립일
  RiTeamLine,       // 사원수
  // RiFundsBoxLine,   // 자본금 - 삭제됨
  RiMoneyDollarCircleLine, // 매출액
  RiShieldUserLine, // 4대보험
  RiGlobalLine,     // 홈페이지
  RiMapPin2Line,    // 주소
  
  // 회사 소개 & 비전
  RiLightbulbLine,
  
  // 주요 사업영역
  RiBuilding4Line,
  RiToolsLine,
  RiExchangeLine,
  
  // 복리후생
  RiHandHeartLine,
  
  // 찾아오시는 길
  RiMapPin2Fill,
  RiPhoneLine
} from 'react-icons/ri';

// 사용하는 배너 이미지
import banner1 from '../assets/images/banner/banner1.png';

const About = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>블루하우징 기업정보 | 인테리어 전문기업</title>
        <meta
          name="description"
          content="블루하우징 기업정보 페이지 - 인테리어 및 건축자재 연구개발 등 다양한 사업을 전개하는 중소기업. 실제 기업 상세정보를 확인해보세요."
        />
      </Helmet>

      {/* 기업정보 배너 섹션 */}
      <div className="relative h-72 md:h-96">
        <img
          src={banner1}
          alt="Company Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-3 drop-shadow-md">
            블루하우징 기업정보
          </h1>
          <p className="text-white max-w-2xl px-4 text-sm md:text-base drop-shadow-sm">
            욕실용품·실내장식·무역 등 다채로운 사업영역을 보유한 인테리어 전문기업
          </p>
        </div>
      </div>

      {/* 회사 개요 */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <RiBuilding3Line className="w-6 h-6 mr-2 text-gray-800" />
            회사 개요
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <InfoRow
                label="대표자"
                value="이존경"
                icon={<RiUser3Line className="w-5 h-5 text-gray-700" />}
              />
              <InfoRow
                label="산업"
                value="생활용품·소비재·기타"
                icon={<RiBook3Line className="w-5 h-5 text-gray-700" />}
              />
              <InfoRow
                label="기업구분"
                value="중소기업"
                icon={<RiBook3Line className="w-5 h-5 text-gray-700" />}
              />
              <InfoRow
                label="설립일"
                value="2012년 (2018년 4월 법인전환)"
                icon={<RiCalendarLine className="w-5 h-5 text-gray-700" />}
              />
              <InfoRow
                label="사원수"
                value="7명"
                icon={<RiTeamLine className="w-5 h-5 text-gray-700" />}
              />
            </div>
            <div className="space-y-4">
              {/* 자본금 InfoRow 삭제 */}
              <InfoRow
                label="매출액"
                value="13억 (2024년 기준)"
                icon={<RiMoneyDollarCircleLine className="w-5 h-5 text-gray-700" />}
              />
              <InfoRow
                label="4대보험"
                value="국민연금, 건강보험, 고용보험, 산재보험"
                icon={<RiShieldUserLine className="w-5 h-5 text-gray-700" />}
              />
              <InfoRow
                label="홈페이지"
                value="www.bluehousing.co.kr"
                isLink
                icon={<RiGlobalLine className="w-5 h-5 text-gray-700" />}
              />
              <InfoRow
                label="주소"
                value="서울 서대문구 충정로9길 15 (충정로2가) 라인빌딩 1층 (건물 주차장 옆 계단 2층)"
                icon={<RiMapPin2Line className="w-5 h-5 text-gray-700" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 회사 소개 / 비전 */}
      <section className="py-12 border-b bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <RiLightbulbLine className="w-6 h-6 mr-2 text-gray-800" />
            회사 소개 & 비전
          </h2>
          <p className="text-gray-700 leading-relaxed">
            블루하우징은 욕실용품, 실내장식, 조립식욕실,
            무역(수출입), 건축자재 연구개발 등 다양한 사업을 전개하고 있는
            인테리어 전문기업이다. 설립 이후 꾸준한 성장과 함께 고객만족을
            최우선으로 하는 시공 서비스를 제공하고 있다.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            한발 앞선 시장 분석과 엄격한 품질관리 시스템을 토대로 국내외
            여러 기업과 협력 관계를 확장하며, 혁신적인 건축 자재 개발과
            고객 맞춤형 공간 솔루션을 제안하고 있다.
          </p>
        </div>
      </section>

      {/* 회사 사무실 이미지 자리 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">회사 사무실 이미지 자리 (추후 이미지로 대체 예정)</span>
          </div>
        </div>
      </section>

      {/* 주요 사업영역 */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <RiToolsLine className="w-6 h-6 mr-2 text-gray-800" />
            주요 사업영역
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BusinessArea
              title="욕실용품 / 조립식욕실"
              icon={<RiBuilding4Line className="w-6 h-6 text-gray-800" />}
              description="욕실용품 연구개발 및 조립식욕실 시공으로 편의성과 높은 완성도를 갖춘 욕실 공간을 제공합니다."
            />
            <BusinessArea
              title="실내장식 (공사금액 1500만원 미만)"
              icon={<RiBuilding4Line className="w-6 h-6 text-gray-800" />}
              description="다양한 주거공간과 상업공간의 인테리어를 합리적인 비용과 섬세한 디자인 완성도로 제안합니다."
            />
            <BusinessArea
              title="무역(수출입)"
              icon={<RiExchangeLine className="w-6 h-6 text-gray-800" />}
              description="욕실 자재와 건축 자재의 해외 수출입을 통해 글로벌 비즈니스 영역을 지속 확장하고 있습니다."
            />
            <BusinessArea
              title="건축자재 연구개발"
              icon={<RiToolsLine className="w-6 h-6 text-gray-800" />}
              description="친환경성과 내구성을 갖춘 건축자재를 연구·개발하여 건설 현장에 보급하고 있습니다."
            />
          </div>
        </div>
      </section>

      {/* 복리후생 */}
      <section className="py-12 border-b bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <RiHandHeartLine className="w-6 h-6 mr-2 text-gray-800" />
            복리후생
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>4대 보험 및 퇴직연금 가입</li>
            <li>직무교육 및 어학수강료 지원을 통한 자기계발 장려</li>
            <li>명절, 경조사비 지원 및 사내 대출 프로그램 운영</li>
            <li>업무 효율 증진을 위한 휴게공간, 카페테리아 운영</li>
          </ul>
        </div>
      </section>

      {/* 찾아오시는 길 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <RiMapPin2Fill className="w-6 h-6 mr-2 text-gray-800" />
            찾아오시는 길
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <RiMapPin2Fill className="w-5 h-5 text-gray-800" />
                <span className="font-medium text-gray-800">본사 위치</span>
              </div>
              <p className="text-gray-700">
                서울 서대문구 충정로9길 15 (충정로2가) 라인빌딩 1층
                (건물 주차장 옆 계단 2층)
              </p>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <RiPhoneLine className="w-5 h-5 text-gray-800" />
                <span className="font-medium text-gray-800">대표번호</span>
              </div>
              <p className="text-gray-700">02-393-9759</p>
              {/* 필요 시 실제 연락처로 교체 */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* ---------------------------
   재사용 컴포넌트들
---------------------------- */

/**
 * InfoRow 컴포넌트
 * - label: 항목명
 * - value: 항목 값
 * - icon: react-icons 등에서 가져온 아이콘 요소
 * - isLink: 항목이 링크 여부 (기본값 false)
 */
const InfoRow = ({ label, value, icon, isLink = false }) => {
  return (
    <div className="flex items-center space-x-4 mb-3">
      {icon && (
        <span className="hover:scale-110 transition-transform ease-out duration-200">
          {icon}
        </span>
      )}
      <span className="font-semibold text-gray-900 w-28">{label}</span>
      {isLink ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-words"
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-700 break-words">{value}</span>
      )}
    </div>
  );
};

/**
 * BusinessArea 컴포넌트
 * - title: 사업 영역 제목
 * - icon: react-icons 등에서 가져온 아이콘 요소
 * - description: 사업 영역 설명
 */
const BusinessArea = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2 space-x-2">
        {icon && (
          <span className="hover:scale-110 transition-transform ease-out duration-200">
            {icon}
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
