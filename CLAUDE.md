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
