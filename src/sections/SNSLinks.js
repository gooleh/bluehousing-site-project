import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const SNSLinks = () => {
  const previewPosts = blogPosts.slice(0, 6);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800">블로그 소식</h2>
        <Link 
          to="/blog"
          className="text-gray-700 hover:text-gray-900 text-sm border border-gray-300 px-3 py-1 rounded transition"
        >
          더보기 →
        </Link>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {previewPosts.map(post => (
          <div 
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition max-w-sm mx-auto"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                자세히 보기 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SNSLinks;
