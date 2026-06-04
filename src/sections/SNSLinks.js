// src/sections/SNSLinks.js
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import BlogPostCard from '../components/BlogPostCard';
import blogPosts from '../data/blogPosts';

const SNSLinks = () => {
  const previewPosts = blogPosts.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-content">
        <SectionHeading title="블로그 소식" english="Blog News" moreLink="/blog" />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {previewPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SNSLinks;
