// src/pages/Services.js

import React from 'react';
import {
  RiMessage2Line,
  RiRulerLine,
  RiPencilRuler2Line,
  RiFileTextLine,
  RiBuilding3Line,
  RiThumbUpLine,
  RiShieldCheckLine
} from 'react-icons/ri';

// 배너 이미지 (예시: servicesBanner.jpg) – 원하는 이미지로 교체
import servicesBanner from '../assets/images/slide3.webp';

// 서비스용 이미지들
import service1 from '../assets/images/services/service1.webp';
import service2 from '../assets/images/services/service2.webp';
import service3 from '../assets/images/services/service3.webp';

const Services = () => {
  return (
    <div className="bg-white">
      {/* 상단 배너 섹션 */}
      <div className="relative w-full h-72 md:h-96">
        <img
          src={servicesBanner}
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        {/* 어두운 오버레이 + 중앙 텍스트 */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mb-2 md:mb-4">
            서비스
          </h1>
          <p className="text-white max-w-2xl text-sm md:text-base drop-shadow">
            당신의 공간을 새롭게, 블루하우징만의 스타일로 완성해드립니다.
          </p>
        </div>
      </div>

      {/* 서비스 목록 섹션 */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ServiceCard
            imgSrc={service1}
            title="주택 설계"
            description="고객의 라이프스타일과 요구를 반영한 맞춤형 설계를 통해, 이상적인 주거 환경을 창조합니다."
          />
          <ServiceCard
            imgSrc={service2}
            title="인테리어 디자인"
            description="기능성과 심미성을 겸비한 인테리어 솔루션을 제공하여, 공간의 가치를 극대화합니다."
          />
          <ServiceCard
            imgSrc={service3}
            title="건축 컨설팅"
            description="전문 컨설턴트와의 1:1 상담을 통해, 고객에게 최적의 건축 및 리모델링 솔루션을 제시합니다."
          />
        </div>

        {/* 시공 프로세스 섹션 */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">
            시공 프로세스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <ProcessStep
              stepNumber="01"
              title="상담 / 문의"
              icon={<RiMessage2Line className="w-10 h-10 text-gray-700 transition-transform duration-300 group-hover:scale-110" />}
              description="고객 문의 접수 후, 요구사항과 예산 범위를 파악하며 초기 상담을 진행합니다."
            />
            <ProcessStep
              stepNumber="02"
              title="현장 실측"
              icon={<RiRulerLine className="w-10 h-10 text-gray-700 transition-transform duration-300 group-hover:scale-110" />}
              description="실제 공간 구조와 치수를 정확히 파악해, 최적화된 설계 데이터를 확보합니다."
            />
            <ProcessStep
              stepNumber="03"
              title="디자인 제안"
              icon={<RiPencilRuler2Line className="w-10 h-10 text-gray-700 transition-transform duration-300 group-hover:scale-110" />}
              description="요구사항과 트렌드를 반영한 디자인 시안, 자재, 색상 등을 종합적으로 제안합니다."
            />
            <ProcessStep
              stepNumber="04"
              title="계약 / 일정 조율"
              icon={<RiFileTextLine className="w-10 h-10 text-gray-700 transition-transform duration-300 group-hover:scale-110" />}
              description="최종 견적과 디자인을 확정 후, 공사 일정 및 계약 세부사항을 체결합니다."
            />
            <ProcessStep
              stepNumber="05"
              title="시공 및 관리"
              icon={<RiBuilding3Line className="w-10 h-10 text-gray-700 transition-transform duration-300 group-hover:scale-110" />}
              description="전문 시공팀이 투입되어 체계적인 공정 관리와 함께 안전·품질 관리를 실시합니다."
            />
            <ProcessStep
              stepNumber="06"
              title="완료 / 사후관리"
              icon={<RiThumbUpLine className="w-10 h-10 text-gray-700 transition-transform duration-300 group-hover:scale-110" />}
              description="시공 완결점검 후 고객에게 인도하며, 추후 문제가 발생하면 즉시 지원하는 사후관리 체계를 운영합니다."
            />
          </div>
        </section>

        {/* 기타 안내 섹션 (추가 보증, 혜택 등) */}
        <div className="bg-gray-50 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <RiShieldCheckLine className="w-6 h-6 text-gray-700" />
            안심 보증 및 추가 혜택
          </h2>
          <p className="text-gray-700 leading-relaxed">
            모든 시공과정에서 안전 기준을 엄격히 준수하며, 시공 완료 후에도 보증 기간 내 무상 수리를 제공해 드립니다.
            보다 쾌적하고 만족스러운 시공 경험을 누리실 수 있도록 끊임없이 노력하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

/* ---------------------------
   재사용 컴포넌트들
---------------------------- */

/**
 * ServiceCard
 * - 이미지 상단 크게( w-full h-80 ) 배치
 * - 텍스트 중심
 */
const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-xl shadow hover:shadow-xl transition duration-300 bg-white">
      <div className="w-full h-80 mb-5">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h2 className="text-base font-semibold mb-2 text-gray-900">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

/**
 * ProcessStep
 * - group 클래스를 추가해 호버 시 아이콘 확대
 */
const ProcessStep = ({ stepNumber, title, icon, description }) => {
  return (
    <div className="group flex flex-col items-center text-center bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <div className="mb-2 text-lg font-bold text-gray-600">
        {stepNumber}
      </div>
      <div className="mb-2">{icon}</div>
      <h3 className="text-base font-semibold mb-1 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
