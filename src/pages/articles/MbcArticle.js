// src/pages/articles/MbcArticle.js
import React from 'react';
import { Link } from 'react-router-dom';
import article5 from '../../assets/images/articles/article5.jpeg';
import article6 from '../../assets/images/articles/article6.jpeg';

const MbcArticle = () => {
  const images = [article5, article6];
  // 실제 기사 링크 예시 (필요시 수정)
  const actualLink = "https://www.mbc.co.kr";

  return (
    <div className="max-w-5xl mx-auto pt-24 py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">MBC 아침 뉴스: 인테리어 혁신의 전환점</h1>
      <p className="text-sm text-gray-500 mb-6">
        2016년 12월 16일 오전 08시45분 방송분
      </p>
      
      {/* 2열 그리드: 이미지 카드 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {images.map((img, index) => (
          <div key={index} className="relative rounded-lg shadow-md w-full h-[500px] overflow-hidden">
            <img 
              src={img}
              alt={`MBC 아침 뉴스 이미지 ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* 기사 내용 */}
      <div className="text-lg text-gray-800 leading-relaxed mb-6 space-y-4">
        <p>
          인테리어 업계가 최근 소비자들의 새로운 라이프스타일과 기술 도입에 힘입어 혁신의 바람을 타고 있다. 전문가들은 특히 최신 스마트 인테리어 솔루션과 친환경 소재의 결합이 
          시장의 판도를 바꾸고 있다고 분석한다.
        </p>
        <p>
          한 업계 관계자는 “과거에는 단순한 리모델링에 그쳤던 인테리어가 이제는 생활의 품격을 높이는 중요한 요소로 자리 잡고 있다”며, 
          “고객 맞춤형 디자인과 첨단 기술이 융합된 스마트 욕실과 주방 솔루션이 큰 인기를 얻고 있다”고 전했다.
        </p>
        <p>
          또한, 대도시 뿐만 아니라 지방 중소도시에서도 고급 인테리어 수요가 지속적으로 증가하고 있는 가운데, 
          새로운 자재와 디자인 트렌드가 전국적으로 확산되고 있는 것으로 나타났다.
        </p>
        <p>
          MBC 아침 뉴스는 앞으로 인테리어 혁신이 단순히 미적 만족을 넘어 생활의 질을 크게 향상시킬 것이라는 전망과 함께, 
          업계 전반의 최신 동향을 심층 취재해 나갈 계획이다.
        </p>
      </div>

      {/* 버튼 영역 */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link to="/" className="text-blue-600 hover:underline">
          홈으로 돌아가기
        </Link>
        <a 
          href={actualLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          기사 보러가기 &rarr;
        </a>
      </div>
    </div>
  );
};

export default MbcArticle;
