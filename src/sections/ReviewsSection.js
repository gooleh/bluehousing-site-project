// src/sections/ReviewsSection.js
import React from 'react';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';
import SectionHeading from '../components/SectionHeading';
import reviews, { maskName } from '../data/reviews';

const ReviewsSection = () => {
  const preview = reviews.slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-content">
        <SectionHeading title="고객 후기" english="Reviews" moreLink="/reviews" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((review, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-card p-7 flex flex-col"
            >
              <RiDoubleQuotesL className="text-3xl text-brand-100 dark:text-brand-900 absolute top-5 right-5" />
              <div className="flex text-accent-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <RiStarFill key={i} />
                ))}
              </div>
              <p className="text-ink-soft dark:text-gray-300 text-[15px] leading-relaxed flex-grow line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-ink/10 dark:border-gray-700">
                <span className="font-bold text-ink dark:text-gray-100">{maskName(review.name)}</span>
                {review.location && (
                  <span className="block text-xs text-ink-muted dark:text-gray-400 mt-0.5">{review.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
