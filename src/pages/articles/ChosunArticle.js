// src/pages/articles/ChosunArticle.js
import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';
import article8 from '../../assets/images/articles/article8.jpeg';
import article9 from '../../assets/images/articles/article9.jpeg';
import article10 from '../../assets/images/articles/article10.jpeg';

const ChosunArticle = () => {
  const images = [article8, article9, article10];

  return (
    <div className="max-w-5xl mx-auto pt-24 py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">조선일보 인테리어 특집: 혁신과 감각이 만들어내는 미래</h1>
      <p className="text-sm text-gray-500 mb-6">
        2016년 12월 12일 오전 09시00분 | 특별 취재
      </p>
      
      {/* 이미지 슬라이더 */}
      <div className="mb-6">
        <ImageSlider images={images} interval={3000} />
      </div>
      
      {/* 기사 본문 */}
      <div className="text-lg text-gray-800 leading-relaxed space-y-4 mb-6 mt-6">
        <p>
          최근 국내 인테리어 시장은 전통적인 디자인을 넘어, 혁신적인 기술과 감각적인 스타일이 결합된 새로운 패러다임을 제시하고 있다. 
          소비자들은 단순히 공간을 꾸미는 것을 넘어서, 집 전체가 하나의 예술작품처럼 느껴지는 ‘공간 예술’에 대한 관심이 높아지고 있다.
        </p>
        <p>
          특히, 친환경 자재와 스마트 기술이 접목된 인테리어 솔루션이 주목받고 있으며, 이는 집의 기능성과 미적 감각을 동시에 충족시키는 방향으로 발전하고 있다.
          업계 관계자는 “앞으로 인테리어는 고객 개개인의 라이프스타일과 취향을 반영하는 맞춤형 디자인으로 나아갈 것”이라고 전망했다.
        </p>
        <p>
          이번 특집 취재에서는 인테리어 전문 기업인 블루하우징이 어떻게 시장의 변화에 대응하며, 고객의 요구에 맞춘 혁신적인 솔루션을 제공하고 있는지를 집중 조명한다.
          블루하우징의 대표는 “인테리어는 단순한 공간 꾸밈이 아니라, 삶의 질을 결정짓는 중요한 요소”라며, 새로운 트렌드에 맞춘 스마트 욕실과 주방 인테리어의 가능성을 강조했다.
        </p>
        <p>
          또한, 리모델링 시장의 활성화와 함께, 오래된 건물의 재탄생을 통한 새로운 공간 창출이 전국적으로 확산되고 있다.
          소비자들은 에너지 효율과 환경 친화적인 요소를 고려한 인테리어에 큰 관심을 보이고 있으며, 이는 인테리어 업계 전반에 긍정적인 영향을 미치고 있다.
        </p>
        <p>
          조선일보는 이번 특집을 통해 인테리어 혁신의 다양한 사례와 함께, 앞으로의 시장 전망 및 기술 발전 방향에 대해 심도 있게 분석하였다.
          블루하우징의 선도적인 디자인과 기술력이 국내 인테리어 시장에 어떤 변화를 가져올지 주목된다.
        </p>
      </div>
      
      {/* 하단 네비게이션 */}
      <div className="flex justify-center">
        <Link to="/" className="text-blue-600 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default ChosunArticle;
