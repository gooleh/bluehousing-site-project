import React from 'react';

const Modal = ({ isOpen, imgList, currentIndex, onClose, onPrev, onNext, setCurrentIndex }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 p-4"
      onClick={onClose}
    >

      {/* 닫기 버튼 */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="text-white text-4xl font-bold hover:text-gray-300"
        >
          &times;
        </button>
      </div>

      {/* 메인 이미지 + 화살표 버튼 */}
      <div className="flex items-center justify-center gap-4 mb-6" onClick={(e) => e.stopPropagation()}>

        {/* 이전 버튼 */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="text-white text-3xl md:text-5xl hover:text-gray-300"
        >
          &#10094;
        </button>

        {/* 반응형 이미지 */}
        <img 
          src={imgList[currentIndex]} 
          alt={`Showroom ${currentIndex + 1}`} 
          className="w-[90vw] h-[90vw] md:w-[700px] md:h-[700px] object-contain rounded-2xl"
        />

        {/* 다음 버튼 */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="text-white text-3xl md:text-5xl hover:text-gray-300"
        >
          &#10095;
        </button>

      </div>

      {/* 썸네일 */}
      <div 
        className="flex gap-2 overflow-x-auto max-w-[90vw] p-2 bg-black bg-opacity-60 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {imgList.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`object-cover cursor-pointer rounded-md border-2 ${
              idx === currentIndex ? 'border-blue-500' : 'border-transparent'
            } h-16 w-24 sm:h-20 sm:w-28`}
          />
        ))}
      </div>

    </div>
  );
};

export default Modal;
