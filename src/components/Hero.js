// src/components/Hero.js
import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg';


const Hero = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Blue Housing
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          당신의 꿈의 집, 세련된 디자인과 최상의 품질로 현실이 됩니다.
        </p>
        <a 
          href="#services" 
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
        >
          자세히 보기
        </a>
      </div>
    </section>
  );
};

export default Hero;
