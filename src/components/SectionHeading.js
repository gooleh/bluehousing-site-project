// src/components/SectionHeading.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const SectionHeading = ({
  title,
  english,
  moreLink,
  moreLabel = '더보기',
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-9 md:mb-10 ${className}`}>
      <div
        className={`flex gap-4 ${
          isCenter ? 'flex-col items-center text-center' : 'flex-col sm:flex-row sm:items-end sm:justify-between'
        }`}
      >
        <div className={isCenter ? 'space-y-2' : 'space-y-1.5'}>
          {english && (
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-accent-600 dark:text-accent-400">
              {english}
            </p>
          )}
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tightish text-ink dark:text-gray-100 leading-snug">
            {title}
          </h2>
        </div>

        {moreLink && (
          <Link
            to={moreLink}
            className="group inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300 transition-colors whitespace-nowrap"
          >
            {moreLabel}
            <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>

      <div
        className={`mt-5 h-px w-full max-w-xs bg-gradient-to-r from-brand-500/80 via-accent-400/60 to-transparent ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionHeading;
