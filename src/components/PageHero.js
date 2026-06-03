// src/components/PageHero.js
import React from 'react';

const PageHero = ({ image, title, english, subtitle, height = 'md' }) => {
  const heightClass =
    height === 'lg'
      ? 'h-[62vh] min-h-[380px] max-h-[580px]'
      : 'h-72 md:h-[28rem]';

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        {english && (
          <span className="mb-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.32em] text-accent-200/95 animate-fade-in">
            {english}
          </span>
        )}
        <h1 className="text-3xl md:text-[2.75rem] font-bold text-white tracking-tightish drop-shadow-lg animate-fade-up leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-sm md:text-base text-white/80 leading-relaxed font-light animate-fade-up">
            {subtitle}
          </p>
        )}
        <span className="mt-7 block h-px w-20 bg-gradient-to-r from-transparent via-accent-300 to-transparent animate-fade-in" />
      </div>
    </section>
  );
};

export default PageHero;
