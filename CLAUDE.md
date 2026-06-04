# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:3000
npm run build      # prebuild fetches blog RSS, then CRA production build
npm run deploy     # build + gh-pages push to bluehousing.co.kr
npm run fetch-blog # manually re-fetch Naver blog RSS → src/data/blogPosts.json
npm test           # CRA test runner (watch mode)
```

`postbuild` copies `build/index.html` → `build/404.html` for GitHub Pages SPA routing.

---

## Architecture

**Stack**: Create React App · React 19 · React Router v7 · Tailwind CSS · GitHub Pages

**Routing** (`src/App.js`): All routes are defined here. `/contact` redirects to `/estimate`. Article sub-pages live under `/articles/:name`. Blog post detail is `/blog/:postId`.

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

**Layout rules**:
- `.container-content` utility (defined in `src/index.css`) = `max-w-content mx-auto px-5 sm:px-6 lg:px-8`
- Pages without a `PageHero` banner need `pt-24` or `pt-28` to clear the fixed header.

**Gallery** (`src/pages/Gallery.js`): Uses `require.context('../assets/images/Gallery', ...)` with `makeGroup`/`range` helpers to load images by filename prefix — avoids 100+ individual imports.

**Estimate form** (`src/pages/Estimate.js`): Submits via EmailJS (`emailjs-com`). Service ID, template ID, and public key are hardcoded in the file.

**Known limitation**: The Kakao Maps SDK key is locked to the `bluehousing.co.kr` domain, so the map (`components/KakaoMap.js`) renders blank on localhost — this is expected, not a bug.

**Dead code** (deleted in June 2026, recoverable from git if needed): `components/SideToolbar.js`, `sections/CompanyInfo.js`, `sections/CustomerReviews.js`, `sections/InquiryForm.js`, `sections/LocationInfo.js`.

---

## 현재 완료 상태 (2026년 6월 기준)

이 시점까지 진행된 작업 목록. 다음 세션에서 이어받을 때 중복 작업 방지용.

### 완료된 주요 작업

| 작업 | 파일 | 완료일 |
|------|------|--------|
| 전면 UI 업그레이드 (디자인 시스템, 공통 컴포넌트, 전 페이지 리디자인) | 전체 | 2026-06-03 |
| 네이버 블로그 RSS 자동 연동 (`scripts/fetch-naver-blog.js`) | `src/data/blogPosts.json` | 2026-06-03 |
| 이용후기 27개로 확장 + 재구성 문구 추가 | `src/data/reviews.js`, `src/pages/Reviews.js` | 2026-06-04 |
| 홈·회사소개 시공사례 수 10,000+으로 업데이트 | `src/pages/Home.js`, `src/pages/About.js` | 2026-06-04 |
| 대표 경력 문구 추가 (LG화학 욕실팀·한샘 신규사업팀장) | `src/pages/About.js` | 2026-06-04 |
| 헤더 높이 조정 (py-0) | `src/components/Header.js` | 2026-06-04 |

### 현재 콘텐츠 현황

- **이용후기**: 27개, 3열 그리드, 2023년 7월~2025년 11월 날짜 분산. `※ 실제 고객 후기를 바탕으로 재구성한 내용입니다.` 문구 포함.
- **갤러리**: `src/assets/images/Gallery/` 내 이미지, 접두사별 그룹 분류.
- **블로그**: 네이버 블로그(`bluehousing1`) RSS에서 46개 포스트 연동.
- **통계 수치**: 시공경력 30년+, 시공사례 10,000+, 책임 A/S 100%, 언론보도 4개사.

---

## 다음에 이어서 할 수 있는 작업 (우선순위 참고용)

아래는 현재 구현되지 않은 기능들. 필요할 때 골라서 진행.

### 콘텐츠
- [ ] 이용후기를 실제 고객에게 받아서 교체 (네이버 플레이스·카카오맵 리뷰 임베드도 고려)
- [ ] 시공사례 갤러리 이미지 보강 (before/after 사진 추가)
- [ ] 공지사항(`src/pages/Notices.js`) 내용 최신화

### 기능
- [ ] 견적 폼(`src/pages/Estimate.js`) EmailJS 연동 실제 테스트 및 템플릿 정비
- [ ] 카카오 지도 마커 정보 업데이트 (`components/KakaoMap.js`)
- [ ] 이용후기 페이지 페이지네이션 추가 (리뷰가 많아질 경우)

### SEO / 성능
- [ ] `sitemap.xml` 최신화 (현재 정적 파일로 존재)
- [ ] OG 이미지 (`public/og-image.jpg`) 업데이트
- [ ] 이미지 WebP 변환 최적화

### 디자인
- [ ] 모바일 헤더 로고 크기·여백 재점검
- [ ] 다크모드 대응 (현재 미지원)
