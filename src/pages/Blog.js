// src/pages/Blog.js
import React from 'react';
import blogPosts from '../data/blogPosts';
import bannerImage from '../assets/images/blog/banner.png'; // 배너 이미지 경로

const Blog = () => {
  return (
    <div className="bg-gray-50">
      {/* 상단 배너 */}
      <div className="relative">
        <img src={bannerImage} alt="블로그 배너" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">블루하우징 블로그</h1>
        </div>
      </div>

      {/* 블로그 포스트 목록 */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map(post => (
            <a 
              key={post.id}
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-[22rem]">
                {/* 이미지 영역 */}
                <div className="relative h-48 flex-shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 italic text-white">
                    자세히 보기 →
                  </div>
                </div>
                {/* 텍스트 영역 */}
                <div className="p-3 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 text-sm overflow-hidden line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
