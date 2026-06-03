// src/components/AlternatingText.js
import React, { useState, useEffect } from 'react';

/**
 * 여러 문구를 일정 간격으로 부드럽게 교차 페이드.
 * (예: 한글 ↔ 영어 번역 문단을 10초 간격으로 전환)
 *
 * - items: 표시할 문구 배열 (문자열)
 * - interval: 전환 간격(ms)
 * - className: 래퍼(레이아웃)용 클래스
 * - itemClassName: 각 문구(텍스트 스타일)용 클래스
 *
 * 모든 문구를 같은 grid 셀에 겹쳐 두어, 컨테이너 높이는 가장 긴 문구에
 * 맞춰지고 레이아웃이 흔들리지 않음.
 */
const AlternatingText = ({
  items,
  interval = 10000,
  className = '',
  itemClassName = '',
}) => {
  const [index, setIndex] = useState(0);
  const count = items ? items.length : 0;

  // 의존성을 배열(items)이 아닌 길이/간격(숫자)으로 두어, 부모 리렌더로
  // items 참조가 매번 바뀌어도 인터벌이 리셋되지 않게 함.
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [count, interval]);

  if (count === 0) return null;

  return (
    <span className={`grid ${className}`}>
      {items.map((text, i) => (
        <span
          key={i}
          aria-hidden={i !== index}
          className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          } ${itemClassName}`}
        >
          {text}
        </span>
      ))}
    </span>
  );
};

export default AlternatingText;
