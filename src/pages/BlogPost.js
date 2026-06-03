// src/pages/BlogPost.js
import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import blogPosts, { blogMeta } from '../data/blogPosts';

const FALLBACK_IMAGE = `${process.env.PUBLIC_URL}/logo512.png`;

const formatDate = (pubDate) => {
  if (!pubDate) return '';
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
    }).format(new Date(pubDate));
  } catch {
    return '';
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);
  const [imgSrc, setImgSrc] = useState(post?.image || FALLBACK_IMAGE);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{post.title} | 블루하우징 블로그</title>
        <meta name="description" content={post.description.slice(0, 160)} />
      </Helmet>

      <div className="relative h-64 md:h-80 bg-ink overflow-hidden">
        <img
          src={imgSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative z-10 container-content h-full flex flex-col justify-end pb-8 md:pb-10">
          <Link
            to="/blog"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <FiArrowLeft /> 블로그 목록
          </Link>
          {post.category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-200 mb-2">
              {post.category}
            </span>
          )}
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-tightish max-w-4xl">
            {post.title}
          </h1>
          {post.pubDate && (
            <time className="mt-3 text-sm text-white/70" dateTime={post.pubDate}>
              {formatDate(post.pubDate)}
            </time>
          )}
        </div>
      </div>

      <div className="container-content py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-card ring-1 ring-ink/5 p-6 md:p-10">
            <p className="text-ink-soft text-base md:text-lg leading-relaxed whitespace-pre-line">
              {post.description}
            </p>
            <p className="mt-6 text-sm text-ink-muted border-t border-ink/10 pt-6">
              네이버 블로그 RSS에서 가져온 요약입니다. 사진·본문 전체는 네이버 블로그에서 확인하실 수
              있습니다.
            </p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-brand-600 px-6 py-3.5 text-white font-semibold hover:bg-brand-700 transition-colors"
            >
              네이버 블로그에서 전체 보기
              <FiExternalLink />
            </a>
          </div>

          <p className="mt-8 text-center text-xs text-ink-muted">
            블로그 동기화: {new Date(blogMeta.fetchedAt).toLocaleDateString('ko-KR')} · 총{' '}
            {blogMeta.count}개 글
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
