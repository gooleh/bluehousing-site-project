import React from 'react';
import { Link } from 'react-router-dom';
import article5 from '../../assets/images/articles/article5.jpeg';
import article6 from '../../assets/images/articles/article6.jpeg';

const MbcArticle = () => {
  const images = [article5, article6];
  const actualLink = "https://www.mbc.co.kr"; // 실제 기사 링크 예시

  return (
    <div className="max-w-5xl mx-auto pt-24 py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">mbc 오늘 아침</h1>
      <p className="text-sm text-gray-500 mb-6">
        2016년 12월 16일 오전 08시30분 방송분
      </p>
      {/* 2열 그리드: 이미지 카드 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {images.map((img, index) => (
          <div key={index} className="relative rounded-lg shadow-md w-full h-[500px] overflow-hidden">
            <img 
              src={img}
              alt={`mbc 오늘 아침 이미지 ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="text-lg text-gray-800 leading-relaxed mb-6">
        <p>'아파트 값 올리는 비법 욕실 인테리아가 대세'</p>
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

export default MbcArticle;
