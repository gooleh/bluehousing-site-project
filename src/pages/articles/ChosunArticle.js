import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';
import article8 from '../../assets/images/articles/article8.jpeg';
import article9 from '../../assets/images/articles/article9.jpeg';
import article10 from '../../assets/images/articles/article10.jpeg';

const ChosunArticle = () => {
  const images = [article8, article9, article10];
  const actualLink = "https://www.chosun.com/"; // 실제 기사 링크 예시

  return (
    <div className="max-w-5xl mx-auto pt-24 py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">조선일보 기사</h1>
      <p className="text-sm text-gray-500 mb-6">조선일보 선정!</p>
      <div className="chosun-article-slider">
        <ImageSlider images={images} interval={3000} />
      </div>
      <div className="text-lg text-gray-800 leading-relaxed mb-6 mt-6">
        <p>마이스터가 운영하는 주식회사 블루하우징</p>
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

export default ChosunArticle;
