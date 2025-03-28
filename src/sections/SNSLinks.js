// src/pages/SNSLinks.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import blogPosts from '../data/blogPosts';

const SNSLinks = () => {
  const previewPosts = blogPosts.slice(0, 6);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 
            className="text-2xl font-bold"
            style={{ color: '#8B4513' }}
          >
            블로그 소식 <br className="md:hidden" />
            <span className="text-base font-medium" style={{ color: '#8B4513' }}>
              (Blog News)
            </span>
          </h2>
          <Link 
            to="/blog"
            className="flex items-center text-sm px-3 py-1 rounded transition"
            style={{ color: '#8B4513' }}
          >
            더보기 <MdArrowForwardIos className="ml-1" />
          </Link>
        </div>
        <hr className="mb-8 border-t-2" style={{ borderColor: '#8B4513' }} />
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {previewPosts.map(post => (
            <a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-[22rem]">
                <div className="relative h-48 flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 italic text-white text-xs">
                    자세히 보기
                  </div>
                </div>
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
    </section>
  );
};

export default SNSLinks;
