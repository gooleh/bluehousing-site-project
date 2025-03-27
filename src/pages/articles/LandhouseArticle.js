// src/pages/articles/LandhouseArticle.js
import React from 'react';
import { Link } from 'react-router-dom';

// 가상의 기사 이미지들 (예시)
import article1 from '../../assets/images/articles/article1.jpeg';
import article2 from '../../assets/images/articles/article2.jpeg';
import article3 from '../../assets/images/articles/article3.jpeg';
import article4 from '../../assets/images/articles/article4.jpeg';

const LandhouseArticle = () => {
  const images = [article1, article2, article3, article4];

  return (
    <div className="max-w-5xl mx-auto pt-24 py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">땅집go 기사</h1>
      <p className="text-sm text-gray-500 mb-6">
        2016년 12월 10일 | 대한민국 인테리어 관련 뉴스
      </p>

      {/* 이미지들을 가로로 나열하고 스크롤바는 숨김 (Tailwind 플러그인 필요) */}
      <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`인테리어 기사 이미지 ${index + 1}`}
            className="h-[120] object-contain rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* 기사 본문 (가상의 내용) */}
      <div className="text-lg text-gray-800 leading-relaxed space-y-4 mb-6">
        <p>
          최근 대한민국에서는 인테리어 시장이 빠르게 성장하며, 주거 및 상업 공간을 
          한층 업그레이드하려는 수요가 크게 늘고 있다. 전문가들은 “코로나19 이후 
          집의 역할이 단순한 주거 공간을 넘어 사무실, 휴식처, 취미 공간으로 확장됐다”라며, 
          이는 인테리어 업계에 새로운 트렌드와 기회를 가져다주었다고 분석한다.
        </p>
        <p>
          특히 욕실·주방 등 습기가 많은 공간에서 곰팡이 방지와 위생을 중시하는 소재가 
          주목받고 있으며, 친환경 자재 사용이 증가하는 추세다. 서울 강남권 인테리어 
          업계 관계자는 “고급스러운 대리석 마감에서부터 AI 기술이 적용된 스마트 욕실 
          시스템까지, 인테리어가 점차 하이테크와 결합되는 양상을 보인다”라고 전했다.
        </p>
        <p>
          전문가들은 향후 2~3년간은 미니멀리즘·친환경 소재·스마트 기능을 결합한 
          ‘하이브리드 인테리어’가 인기를 끌 것으로 전망한다. 한 업계 관계자는 
          “집의 의미가 재택근무와 라이프스타일 변화를 통해 확장되면서, 
          주거 공간 전반을 재설계하는 수요가 계속 늘어날 것”이라고 덧붙였다.
        </p>
        <p>
          한편, 지방 중소도시에서도 인테리어 수요가 꾸준히 증가하며, 
          수도권에 국한되지 않은 전국 단위 시장 확대가 진행 중이라는 평가다. 
          전문가들은 “리모델링이 단순히 오래된 건물을 새롭게 만드는 수준을 넘어, 
          건축 자재·디자인·스마트 기능까지 종합적으로 고려하는 시대”라고 설명한다.
        </p>
      </div>

      {/* 홈으로 돌아가기 버튼만 표시 (뉴스 보러가기 링크 제거) */}
      <div className="flex items-center">
        <Link to="/" className="text-blue-600 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default LandhouseArticle;
