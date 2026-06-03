// src/sections/MediaCoverage.js
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

import article1Img from '../assets/images/articles/article1.jpeg';
import article2Img from '../assets/images/articles/article2.jpeg';
import article3Img from '../assets/images/articles/article3.jpeg';
import article4Img from '../assets/images/articles/article4.jpeg';

const mediaArticles = [
  { title: '땅집go 기사', outlet: '땅집고', link: '/articles/landhouse', image: article1Img },
  { title: 'MBC 오늘아침', outlet: 'MBC', link: '/articles/mbc', image: article2Img },
  { title: '한국경제산업', outlet: '한국경제', link: '/articles/industry', image: article3Img },
  { title: '조선일보', outlet: '조선일보', link: '/articles/chosun', image: article4Img },
];

const MediaCoverage = () => (
  <section className="py-16 md:py-20 bg-gray-50">
    <div className="container-content">
      <SectionHeading title="언론 속의 블루하우징" english="In the News" />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mediaArticles.map((article, index) => (
          <Link key={index} to={article.link} className="group block">
            <div className="relative overflow-hidden rounded-2xl shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:-translate-y-1">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
                {article.outlet}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white drop-shadow">{article.title}</h3>
                <span className="text-xs text-white/0 group-hover:text-white/90 transition-colors">
                  자세히 →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default MediaCoverage;
