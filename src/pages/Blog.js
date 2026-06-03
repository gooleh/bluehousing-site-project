// src/pages/Blog.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import BlogPostCard from '../components/BlogPostCard';
import blogPosts, { blogMeta } from '../data/blogPosts';
import bannerImage from '../assets/images/slide3.webp';

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>블로그 | 블루하우징</title>
        <meta
          name="description"
          content="블루하우징 네이버 블로그 소식. 욕실·주택 리모델링 시공 사례와 인테리어 정보를 최신순으로 확인하세요."
        />
      </Helmet>

      <PageHero
        image={bannerImage}
        english="Blog"
        title="블루하우징 블로그"
        subtitle="블루하우징의 시공 현장과 인테리어 이야기를 담았습니다. 카드를 클릭하면 네이버 블로그에서 전체 내용을 보실 수 있습니다."
      />

      <div className="container-content py-12 md:py-16">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <p className="text-sm text-ink-muted">
            총 <span className="font-semibold text-ink">{blogMeta.count}</span>개 글 · 최신순
          </p>
          <a
            href={blogMeta.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            네이버 블로그 바로가기 →
          </a>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
