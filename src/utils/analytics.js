// src/utils/analytics.js
// GA4 이벤트 추적 유틸리티
// window.gtag가 없으면(개발 환경 등) 조용히 무시합니다.

const gtag = (...args) => {
  if (typeof window.gtag === 'function') window.gtag(...args);
};

/** 전화 버튼 클릭 */
export const trackCall = (label = '') => {
  gtag('event', 'call_click', {
    event_category: 'engagement',
    event_label: label,
  });
};

/** 견적 버튼 클릭 (폼 이동 전) */
export const trackEstimateClick = (label = '') => {
  gtag('event', 'estimate_click', {
    event_category: 'engagement',
    event_label: label,
  });
};

/** 견적 폼 제출 성공 — GA4 표준 전환 이벤트 */
export const trackLead = (serviceTypes = []) => {
  gtag('event', 'generate_lead', {
    event_category: 'conversion',
    event_label: serviceTypes.join(', '),
  });
};
