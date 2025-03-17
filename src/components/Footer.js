import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-sm">
          &copy; {new Date().getFullYear()} Blue Housing. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          {/* 소셜 아이콘은 실제 아이콘 SVG 또는 이미지로 교체하세요 */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
