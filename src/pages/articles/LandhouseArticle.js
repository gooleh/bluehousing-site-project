// src/pages/articles/LandhouseArticle.js
import React from 'react';
import { Link } from 'react-router-dom';
import article1 from '../../assets/images/articles/article1.jpeg';
import article2 from '../../assets/images/articles/article2.jpeg';
import article3 from '../../assets/images/articles/article3.jpeg';
import article4 from '../../assets/images/articles/article4.jpeg';

const LandhouseArticle = () => {
  const images = [article1, article2, article3, article4];
  const actualLink = "https://www.chosun.com/"; // 실제 기사 링크 예시

  return (
    <div className="max-w-5xl mx-auto pt-24 py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">땅집go 기사</h1>
      <p className="text-sm text-gray-500 mb-6">
        2016년 12월 10일 | 조선일보 선정! "조선닷컴 기사"
      </p>
      {/* 이미지들을 가로로 나열하고 스크롤바는 숨김 */}
      <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`땅집go 기사 이미지 ${index + 1}`}
            className="h-[120] object-contain rounded-lg shadow-md"
          />
        ))}
      </div>
      <div className="text-lg text-gray-800 leading-relaxed space-y-4 mb-6">
        <p>그가 손댄 욕실만 10년간 1만개 "요즘 대세는…"</p>
        <p>땅집go 조선닷컴 (2016.12.10 입력) 기사</p>
        <p>[인테리어 고수] ⑥ ‘욕실 마이스터’ 이존경 대표</p>
        <p>
          이존경 블루하우징 대표는 욕실·화장실 인테리어 업계의 격언부터 소개했다. 이 대표는 LG화학 욕실팀을 거쳐 한샘 신규사업팀장으로 욕실사업을 총괄한 전문가다. 그의 손을 거친 욕실·화장실만 1만 세트가 넘는다.
        </p>
        <p>
          땅집GO(realty.chosun.com)가 그를 만나 욕실·화장실 인테리어와 리모델링 노하우를 들어봤다.
        </p>
      </div>
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

export default LandhouseArticle;
