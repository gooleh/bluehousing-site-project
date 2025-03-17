import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-white">
      {images.map((imgSrc, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={imgSrc} 
            alt={`slide-${index}`} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
