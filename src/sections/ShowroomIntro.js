// src/sections/ShowroomIntro.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import AlternatingText from '../components/AlternatingText';

import showroom1 from '../assets/images/Showroom/showroom1.jpeg';
import showroom2 from '../assets/images/Showroom/showroom2.jpeg';
import showroom3 from '../assets/images/Showroom/showroom3.jpeg';

const showroomImages = [
  { src: showroom1, alt: '블루하우징 전시장 1' },
  { src: showroom2, alt: '블루하우징 전시장 2' },
  { src: showroom3, alt: '블루하우징 전시장 3' },
];

const showroomDetailLink = '/showroom-detail';

const ShowroomIntro = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent-600 dark:text-accent-400">
            BlueHousing Showroom
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tightish text-ink dark:text-gray-100">
            블루하우징 전시장
          </h2>
          <AlternatingText
            className="mt-5"
            itemClassName="text-ink-soft dark:text-gray-300 leading-relaxed"
            interval={10000}
            items={[
              '30년 경력의 마이스터가 책임 시공하는 종합 인테리어 전문 기업으로, 철저한 책임 시공과 A/S를 보장합니다. 전시장에서 다양한 인테리어 스타일과 최신 트렌드를 직접 확인하실 수 있습니다.',
              'An interior design company led by a master with 30 years of experience, ensuring expert construction and guaranteed after-service. Visit our showroom to explore a variety of interior styles and the latest trends firsthand.',
            ]}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {showroomImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <Link to={showroomDetailLink} className="block">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-72 md:h-80 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="inline-flex items-center gap-1.5 text-white font-medium">
                    전시장 둘러보기 <FiArrowRight />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to={showroomDetailLink}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-7 py-3 text-base font-semibold text-brand-700 dark:text-brand-300 dark:border-brand-500 transition-all hover:bg-brand-600 hover:text-white dark:hover:bg-brand-700"
          >
            전시장 전체보기 <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowroomIntro;
