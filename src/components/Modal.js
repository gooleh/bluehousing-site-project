// src/components/Modal.js
import React, { useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const navBtnClass =
  'shrink-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-ink shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/80 transition-all duration-200 hover:scale-105 hover:bg-accent-50 active:scale-95 disabled:opacity-40';

const Modal = ({
  isOpen,
  imgList,
  captions = [],
  currentIndex,
  onClose,
  onPrev,
  onNext,
  setCurrentIndex,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const hasMultiple = imgList.length > 1;
  const caption = captions[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-[#0a0e14]/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="이미지 상세 보기"
    >
      {/* 상단 바 */}
      <div
        className="flex shrink-0 items-center justify-between px-4 md:px-8 py-3 md:py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-[4rem] text-sm font-medium tracking-wide tabular-nums text-white/80">
          {hasMultiple && (
            <>
              <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-white/35"> / {String(imgList.length).padStart(2, '0')}</span>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="닫기"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/90 ring-1 ring-white/15 bg-white/5 transition-colors hover:bg-white/15"
        >
          <FiX className="text-xl" />
        </button>
      </div>

      {/* 이미지 + 좌우 버튼 (이미지에 밀착) */}
      <div
        className="relative flex flex-1 items-center justify-center min-h-0 px-3 sm:px-6 pb-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-h-full max-w-full items-center gap-1 sm:gap-2">
          {hasMultiple ? (
            <button type="button" onClick={onPrev} aria-label="이전 이미지" className={navBtnClass}>
              <FiChevronLeft className="text-xl md:text-2xl" />
            </button>
          ) : (
            <span className="hidden sm:block w-10 md:w-12 shrink-0" aria-hidden="true" />
          )}

          <figure className="relative flex flex-col items-center min-w-0">
            <img
              key={currentIndex}
              src={imgList[currentIndex]}
              alt={caption || `이미지 ${currentIndex + 1}`}
              className="max-h-[72vh] w-auto max-w-full sm:max-w-[min(100%,52rem)] h-auto object-contain rounded-xl md:rounded-2xl shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/10 animate-fade-in"
            />
            {caption && (
              <figcaption className="mt-3 max-w-lg px-2 text-center text-sm text-white/75 line-clamp-2">
                {caption}
              </figcaption>
            )}
          </figure>

          {hasMultiple ? (
            <button type="button" onClick={onNext} aria-label="다음 이미지" className={navBtnClass}>
              <FiChevronRight className="text-xl md:text-2xl" />
            </button>
          ) : (
            <span className="hidden sm:block w-10 md:w-12 shrink-0" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* 썸네일 */}
      {hasMultiple && (
        <div className="shrink-0 px-4 md:px-8 pb-5 pt-1" onClick={(e) => e.stopPropagation()}>
          <div className="mx-auto flex w-fit max-w-full gap-2 overflow-x-auto scrollbar-hide py-1">
            {imgList.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`${idx + 1}번 이미지 보기`}
                aria-current={idx === currentIndex ? 'true' : undefined}
                className={`relative shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
                  idx === currentIndex
                    ? 'ring-2 ring-accent-400 ring-offset-2 ring-offset-[#0a0e14] opacity-100 scale-105'
                    : 'opacity-45 hover:opacity-80'
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="h-12 w-16 sm:h-14 sm:w-[4.5rem] object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
