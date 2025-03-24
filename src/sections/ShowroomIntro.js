import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 전시장 이미지 3개만 import
import showroom1 from '../assets/images/Showroom/showroom1.jpeg';
import showroom2 from '../assets/images/Showroom/showroom2.jpeg';
import showroom3 from '../assets/images/Showroom/showroom3.jpeg';

const showroomImages = [
  { src: showroom1, alt: '블루하우징 전시장 1' },
  { src: showroom2, alt: '블루하우징 전시장 2' },
  { src: showroom3, alt: '블루하우징 전시장 3' },
];

const showroomDetailLink = "/showroom-detail";

const ShowroomIntro = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-16 px-4 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">블루하우징 전시장</h2>
        <p className="text-gray-700 leading-relaxed mb-12">
          블루하우징은 30년 경력의 마이스터가 시공하는 종합 인테리어 전문 기업으로, 책임 시공 및 A/S를 보장합니다.<br/>
          전시장에서는 다양한 인테리어 스타일과 최신 트렌드를 직접 확인하실 수 있습니다.
        </p>

        {/* 이미지 3개만 보여줌 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {showroomImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <Link to={showroomDetailLink} className="block">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="object-cover w-full h-[300px] md:h-[400px] transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default ShowroomIntro;
