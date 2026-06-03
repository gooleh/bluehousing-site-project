// src/components/BeforeAfterCompare.js
import React, { useState, useRef, useCallback } from 'react';

const BeforeAfterCompare = ({ before, after, label }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = (e) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const clipRight = 100 - position;

  return (
    <figure className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink/10 shadow-card ring-1 ring-ink/5 select-none touch-none cursor-ew-resize"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="slider"
        aria-label={label ? `시공 전후 비교 ${label}` : '시공 전후 비교'}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <img
          src={after}
          alt="시공 후"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <img
          src={before}
          alt="시공 전"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
          draggable={false}
        />

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.45)]"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card ring-2 ring-white/80">
            <span className="text-lg font-bold tracking-tighter" aria-hidden="true">
              ↔
            </span>
          </div>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
          After
        </span>
      </div>
      {label && (
        <figcaption className="text-center text-sm text-ink-muted">시공 사례 {label}</figcaption>
      )}
    </figure>
  );
};

export default BeforeAfterCompare;
