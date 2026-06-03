// src/components/BlogPostCard.js
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const FALLBACK_IMAGE = `${process.env.PUBLIC_URL}/logo512.png`;

const formatDate = (pubDate) => {
  if (!pubDate) return '';
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(pubDate));
  } catch {
    return '';
  }
};

const BlogPostCard = ({ post, compact = false }) => {
  const [imgSrc, setImgSrc] = useState(post.image || FALLBACK_IMAGE);

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <article
        className={`flex flex-col h-full bg-white rounded-2xl shadow-card overflow-hidden ring-1 ring-ink/5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
          compact ? 'h-[20rem]' : 'min-h-[24rem]'
        }`}
      >
        <div className={`relative flex-shrink-0 overflow-hidden bg-ink/5 ${compact ? 'h-40' : 'h-48'}`}>
          <img
            src={imgSrc}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgSrc(FALLBACK_IMAGE)}
          />
          {post.category && (
            <span className="absolute left-3 top-3 max-w-[85%] truncate rounded-full bg-ink/75 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
          )}
        </div>
        <div className="flex flex-col flex-grow p-5">
          {post.pubDate && (
            <time className="text-xs text-ink-muted mb-2" dateTime={post.pubDate}>
              {formatDate(post.pubDate)}
            </time>
          )}
          <h2 className="text-lg font-semibold text-ink line-clamp-2 group-hover:text-brand-600 transition-colors">
            {post.title}
          </h2>
          <p className={`mt-2 text-ink-muted text-sm leading-relaxed flex-grow ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
            {post.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
            네이버 블로그에서 보기
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </article>
    </a>
  );
};

export default BlogPostCard;
