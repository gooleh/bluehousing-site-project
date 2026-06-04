/* service-worker.js — 블루하우징 PWA 캐시 전략
 * 정적 자산(JS/CSS/이미지): Cache First (빠른 재방문)
 * HTML 페이지: Network First + 오프라인 fallback
 * 버전 업데이트 시 CACHE_VERSION 숫자를 올려주세요.
 */

const CACHE_VERSION = 'v2';
const CACHE_NAME = `bluehousing-${CACHE_VERSION}`;

const OFFLINE_FALLBACK = '/index.html';

// 설치 시 오프라인 fallback 페이지만 사전 캐시
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_FALLBACK))
  );
  self.skipWaiting();
});

// 활성화 시 이전 버전 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 외부 요청(GA, Kakao 등)은 그냥 통과
  if (url.origin !== self.location.origin) return;

  // GET 요청만 처리
  if (request.method !== 'GET') return;

  const isStaticAsset = url.pathname.startsWith('/static/');
  const isImage = /\.(webp|png|jpg|jpeg|svg|ico)$/i.test(url.pathname);

  if (isStaticAsset || isImage) {
    // 정적 자산: Cache First → 없으면 네트워크 → 캐시에 저장
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            // response.clone()은 return 전에 동기적으로 실행해야 함.
            // caches.open()이 비동기라 나중에 clone()을 호출하면
            // 이미 body가 소비된 후라 "body is already used" 오류 발생.
            const cloned = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
          }
          return response;
        });
      })
    );
  } else {
    // HTML/API: Network First → 실패 시 오프라인 fallback
    event.respondWith(
      fetch(request).catch(() =>
        caches.match(request).then((cached) => cached || caches.match(OFFLINE_FALLBACK))
      )
    );
  }
});
