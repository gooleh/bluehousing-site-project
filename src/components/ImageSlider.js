// src/components/ImageSlider.js
import React, { useState, useEffect, useCallback } from 'react';

const ImageSlider = ({
  images,
  imageAlts,
  interval = 4000,
  onSlideChange,
  heightClass = 'h-[50vh] md:h-[70vh]',
  showDots = true,
  overlayGradient = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex(index);
      if (onSlideChange) onSlideChange(index);
    },
    [onSlideChange]
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev === images.length - 1 ? 0 : prev + 1;
        if (onSlideChange) onSlideChange(next);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, onSlideChange]);

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden bg-ink`}>
      {images.map((imgSrc, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={imgSrc}
            alt={imageAlts?.[index] ?? `블루하우징 인테리어 시공 사례 ${index + 1}`}
            className={`w-full h-full object-cover ${index === currentIndex ? 'animate-kenburns' : ''}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      {overlayGradient && (
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60 pointer-events-none" />
      )}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`${index + 1}번 슬라이드로 이동`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-7 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
