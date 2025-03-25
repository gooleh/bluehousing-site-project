import React from 'react';
import { Link } from 'react-router-dom';

// 이미지 임포트 (경로는 프로젝트 구조에 맞게 수정)
import article1Img from '../assets/images/articles/article1.jpeg';
import article2Img from '../assets/images/articles/article2.jpeg';
import article3Img from '../assets/images/articles/article3.jpeg';
import article4Img from '../assets/images/articles/article4.jpeg';

const mediaArticles = [
  { title: '땅집go기사', link: '/articles/landhouse', image: article1Img },
  { title: 'mbc오늘아침', link: '/articles/mbc', image: article2Img },
  { title: '한국경제산업', link: '/articles/industry', image: article3Img },
  { title: '조선일보', link: '/articles/chosun', image: article4Img },
];

const MediaCoverage = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 
          className="text-2xl font-bold text-left"
          style={{ color: 'gray' }}  // 제목 연한 회색
        >
          언론 속의 블루하우징
        </h2>
        <hr className="mt-4 border-t-2" style={{ borderColor: 'lightgray' }} />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mediaArticles.map((article, index) => (
          <Link
            key={index}
            to={article.link}
            className="group block"
          >
            {/* 이미지 컨테이너 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg transform transition hover:scale-105">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              {/* 오버레이: hover 시 '기사 상세보기' 텍스트 표시 */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300">
                <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  기사 상세보기 &rarr;
                </p>
              </div>
            </div>
            {/* 이미지 밖에 위치한 기사 제목 */}
            <div className="mt-4 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default MediaCoverage;
