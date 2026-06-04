// src/hooks/usePageTracking.js
// GA4 SPA 페이지뷰 추적 훅.
// public/index.html의 GA4 스크립트와 연동해 라우트 변경마다 page_view 이벤트를 전송합니다.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ⚠️  본인의 GA4 측정 ID로 교체하세요 (예: G-ABCDE12345)
export const GA_MEASUREMENT_ID = 'G-JZB82JLC71';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [location]);
};

export default usePageTracking;
