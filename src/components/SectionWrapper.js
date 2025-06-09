// src/components/SectionWrapper.js

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, // 15% 보일 때 트리거
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
