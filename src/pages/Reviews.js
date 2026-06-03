// src/pages/Reviews.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';
import PageHero from '../components/PageHero';
import reviews, { maskName } from '../data/reviews';
import bannerReviews from '../assets/images/slide1.webp';

const Reviews = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>이용후기 | 블루하우징</title>
        <meta name="description" content="블루하우징에서 욕실·주택 리모델링을 진행한 고객들의 생생한 이용후기를 확인하세요." />
      </Helmet>

      <PageHero
        image={bannerReviews}
        english="Reviews"
        title="이용후기"
        subtitle="블루하우징과 함께한 고객들의 진솔한 이야기"
      />

      <section className="py-14 md:py-20">
        <div className="container-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-card p-7 flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <RiDoubleQuotesL className="text-3xl text-brand-100 absolute top-5 right-5" />
              <div className="flex text-accent-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <RiStarFill key={i} />
                ))}
              </div>
              <p className="text-ink-soft text-[15px] leading-relaxed flex-grow">
                “{review.text}”
              </p>
              <div className="mt-5 pt-4 border-t border-ink/10">
                <span className="font-bold text-ink">{maskName(review.name)}</span>
                {review.location && (
                  <span className="block text-xs text-ink-muted mt-0.5">{review.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
