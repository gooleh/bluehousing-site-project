# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:3000
npm run build      # prebuild fetches blog RSS → CRA build → OG 페이지 생성 → 404.html 복사
npm run deploy     # build + gh-pages push to bluehousing.co.kr
npm run fetch-blog # manually re-fetch Naver blog RSS → src/data/blogPosts.json
npm test           # CRA test runner (watch mode)
```

`postbuild` (`scripts/postbuild.js`):
1. `scripts/generate-og-pages.js` — 9개 라우트 정적 HTML 생성 (소셜 OG 태그용)
2. `build/index.html` → `build/404.html` 복사 (GitHub Pages SPA 라우팅)

---

## Architecture

**Stack**: Create React App · React 19 · React Router v7 · Tailwind CSS · GitHub Pages

**Routing** (`src/App.js`): All routes are defined here. `/contact` redirects to `/estimate`. Article sub-pages live under `/articles/:name`. Blog post detail is `/blog/:postId`. `*` catch-all → `<NotFound />`.

**Page structure**: Each page imports `<PageHero>` for the banner, wraps sections in `<SectionWrapper>`, and sets meta via `react-helmet-async`. Home lazy-loads all its sections via `React.lazy` + `<Suspense>`.

**Section order on Home**: Hero → Stats bar → WhyUs → ShowroomIntro → GallerySection → ReviewsSection → MediaCoverage → SNSLinks → Notices → EstimateRequest.

**Data layer — single sources of truth**:
- `src/data/company.js` — all contact info, address, account, SNS URLs. Every component that shows a phone number or address must import from here.
- `src/data/reviews.js` — shared by `sections/ReviewsSection.js` and `pages/Reviews.js`. Exports `maskName`.
- `src/data/blogPosts.json` — generated at build time by `scripts/fetch-naver-blog.js` (Naver RSS → JSON).
- `src/data/galleryImages.js` / `src/data/galleryBeforeAfter.js` — gallery data.

**Design tokens** (all in `tailwind.config.js`):
- `brand-*` — navy blue palette (primary)
- `accent-*` — gold/brown palette (#b08d57 family, CTAs)
- `ink` / `ink-soft` / `ink-muted` — text grays
- Shadows: `shadow-soft`, `shadow-card`, `shadow-card-hover`, `shadow-header`
- Animations: `animate-fade-up`, `animate-fade-in`, `animate-kenburns`
- Never use inline `style={{color:...}}` — always use tokens.

**Font**: Pretendard loaded via CDN at the top of `src/index.css`. Set as `font-sans` default in Tailwind.

**Shared components** (reuse these, don't rebuild):
- `components/SectionHeading.js` — section title + English subtitle + optional "more" link
- `components/PageHero.js` — full-width banner used on About/Services/Gallery/Estimate/Location
- `components/QuickContact.js` — desktop: right-side floating buttons; mobile: bottom fixed action bar. Rendered in `App.js`. A `<div className="md:hidden h-14">` spacer below it prevents content from being hidden behind the mobile bar.
- `components/Header.js` — fixed header, transparent on Home hero only, solid elsewhere. Mobile hamburger drawer included.

**Analytics** (`src/utils/analytics.js`):
- `trackCall(label)` — 전화 버튼 클릭 (`call_click` 이벤트)
- `trackEstimateClick(label)` — 견적 버튼 클릭 (`estimate_click` 이벤트)
- `trackLead(serviceTypes)` — 견적 폼 제출 성공 (`generate_lead` 이벤트)
- GA4 훅: `src/hooks/usePageTracking.js` — 라우트 변경마다 `page_view` 자동 전송

**Layout rules**:
- `.container-content` utility (defined in `src/index.css`) = `max-w-content mx-auto px-5 sm:px-6 lg:px-8`
- Pages without a `PageHero` banner need `pt-24` or `pt-28` to clear the fixed header.

**Gallery** (`src/pages/Gallery.js`): Uses `require.context('../assets/images/Gallery', ...)` with `makeGroup`/`range` helpers to load images by filename prefix — avoids 100+ individual imports.

**Estimate form** (`src/pages/Estimate.js`): Submits via EmailJS (`emailjs-com`). Service ID, template ID, and public key are hardcoded in the file.

**Kakao Maps** (`components/KakaoMap.js`): SDK를 `index.html` 전역 로드에서 제거하고, `/location` 페이지 진입 시 `autoload=false` 방식으로 동적 로드. 다른 모든 페이지에서 SDK 불필요하게 로드되던 문제 해결. SDK 키가 `bluehousing.co.kr` 도메인 고정 → localhost에서 지도 빈 화면은 정상.

**Dead code** (deleted in June 2026, recoverable from git if needed): `components/SideToolbar.js`, `sections/CompanyInfo.js`, `sections/CustomerReviews.js`, `sections/InquiryForm.js`, `sections/LocationInfo.js`.

---

## 현재 완료 상태 (2026년 6월 기준)

### 완료된 주요 작업

| 작업 | 파일 | 완료일 |
|------|------|--------|
| 전면 UI 업그레이드 (디자인 시스템, 공통 컴포넌트, 전 페이지 리디자인) | 전체 | 2026-06-03 |
| 네이버 블로그 RSS 자동 연동 | `scripts/fetch-naver-blog.js` | 2026-06-03 |
| 이용후기 27개로 확장 + 재구성 문구 추가 | `src/data/reviews.js`, `src/pages/Reviews.js` | 2026-06-04 |
| 홈·회사소개 시공사례 수 10,000+으로 업데이트 | `src/pages/Home.js`, `src/pages/About.js` | 2026-06-04 |
| 대표 경력 문구 추가 (LG화학 욕실팀·한샘 신규사업팀장) | `src/pages/About.js` | 2026-06-04 |
| 전 페이지 OG 태그 + canonical URL 추가 | 모든 페이지 | 2026-06-04 |
| 구조화 데이터 강화 (geo, openingHours, sameAs) | `public/index.html` | 2026-06-04 |
| 히어로 이미지 LCP 최적화 (fetchPriority=high) | `src/components/ImageSlider.js` | 2026-06-04 |
| 이미지 lazy loading 추가 | About, Services 페이지 | 2026-06-04 |
| sitemap.xml lastmod 날짜 추가 | `public/sitemap.xml` | 2026-06-04 |
| 소셜 OG 프리렌더링 (카카오톡 공유 픽스) | `scripts/generate-og-pages.js` | 2026-06-04 |
| Google Analytics 4 연동 (G-JZB82JLC71) | `public/index.html`, `src/hooks/usePageTracking.js` | 2026-06-04 |
| GA4 전환 이벤트 (전화 클릭·견적 클릭·폼 제출) | `src/utils/analytics.js` | 2026-06-04 |
| 커스텀 404 페이지 | `src/pages/NotFound.js` | 2026-06-04 |
| PWA (서비스워커 + manifest 정비) | `public/service-worker.js`, `public/manifest.json` | 2026-06-04 |
| Suspense 로딩 UI 스피너로 교체 | `src/pages/Home.js` | 2026-06-04 |
| 서비스워커 clone 버그 수정 + CACHE_VERSION v2 | `public/service-worker.js` | 2026-06-04 |
| 카카오 SDK 동적 로드로 전환 (parser-blocking 경고 제거) | `src/components/KakaoMap.js`, `public/index.html` | 2026-06-04 |

### 현재 콘텐츠 현황

- **이용후기**: 27개, 3열 그리드, 2023년 7월~2025년 11월. `※ 실제 고객 후기를 바탕으로 재구성한 내용입니다.` 문구 포함.
- **갤러리**: `src/assets/images/Gallery/` 이미지, 접두사별 그룹 분류.
- **블로그**: 네이버 블로그(`bluehousing1`) RSS 46개 포스트 연동.
- **통계 수치**: 시공경력 30년+, 시공사례 10,000+, 책임 A/S 100%, 언론보도 4개사.
- **GA4**: `G-JZB82JLC71` 적용. page_view + call_click + estimate_click + generate_lead 추적 중.

### GitHub Pages 관련 특이사항

- **OG 프리렌더링**: `scripts/generate-og-pages.js`가 빌드 시 9개 라우트의 정적 HTML을 생성. 카카오톡 등 SNS 공유 시 페이지별 OG 태그가 올바르게 표시됨.
- **SPA 라우팅**: `build/404.html` = `build/index.html` 복사본. GitHub Pages가 없는 경로 접근 시 404.html을 서빙하고 React Router가 라우팅 처리.
- **서비스워커**: `public/service-worker.js` — 정적 자산 Cache-First, HTML Network-First 전략. 현재 `CACHE_VERSION = 'v2'`. 코드 변경 후 배포 시 버전 숫자를 올려야 기존 캐시가 갱신됨. 브라우저가 구버전 SW를 실행 중이면 탭 닫고 재오픈하면 자동 교체.
- **로컬 개발 시 카카오 지도**: SDK 키가 `bluehousing.co.kr` 도메인 고정 → localhost에서 지도 빈 화면 정상.

---

## 다음에 이어서 할 수 있는 작업

### 콘텐츠
- [ ] 이용후기를 실제 고객에게 받아서 교체
- [ ] 시공사례 갤러리 이미지 보강 (before/after 사진 추가)
- [ ] 공지사항(`src/pages/Notices.js`) 내용 최신화

### 기능
- [ ] 카카오 지도 마커 정보 업데이트 (`components/KakaoMap.js`)
- [ ] 이용후기 페이지 페이지네이션 (리뷰가 많아질 경우)

### SEO (직접 해야 하는 것)
- [ ] Google Search Console 사이트맵 제출 (`https://bluehousing.co.kr/sitemap.xml`)
- [ ] 네이버 서치어드바이저 사이트맵 제출
- [ ] 네이버 스마트플레이스 등록 (지역 검색 노출)

### 디자인
- [ ] 다크모드 대응 (현재 미지원)
- [ ] OG 이미지 별도 제작 (`public/og-image.jpg`) — 현재 logo512.png 사용 중
