/**
 * scripts/generate-og-pages.js
 *
 * react-snap 대체: puppeteer 없이 각 라우트에 올바른 OG 태그를 가진
 * 정적 HTML 파일을 생성합니다.
 *
 * 동작 방식:
 *   1. build/index.html 을 읽는다 (React SPA 번들 포함)
 *   2. 각 페이지별 <title> / og:* / canonical / meta description 을 교체
 *   3. build/{route}/index.html 로 저장
 *
 * 결과:
 *   - 소셜 미디어 크롤러(카카오톡, 네이버, 인스타): 정적 HTML에서 OG 태그를 읽음
 *   - 일반 브라우저: React SPA가 정상 로드됨
 */

const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[og-pages] build/index.html 없음. npm run build 먼저 실행하세요.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

const PAGES = [
  {
    route: 'about',
    title: '기업소개 | 블루하우징',
    desc: '30년 경력 마이스터가 직접 시공하는 블루하우징. 하청 없는 책임 시공, 투명한 견적, 완벽한 A/S로 고객의 공간을 완성합니다.',
    url: 'https://bluehousing.co.kr/about',
  },
  {
    route: 'services',
    title: '서비스 | 블루하우징',
    desc: '욕실·주택 리모델링, 실내장식, 건축 컨설팅까지. 블루하우징의 체계적인 시공 프로세스와 책임 A/S를 확인하세요.',
    url: 'https://bluehousing.co.kr/services',
  },
  {
    route: 'gallery',
    title: '갤러리 | 블루하우징 시공 사례',
    desc: '블루하우징의 욕실·주택 리모델링 및 인테리어 시공 사례 갤러리. 실제 시공 사진을 확인하세요.',
    url: 'https://bluehousing.co.kr/gallery',
  },
  {
    route: 'reviews',
    title: '이용후기 | 블루하우징',
    desc: '블루하우징에서 욕실·주택 리모델링을 진행한 고객들의 생생한 이용후기를 확인하세요.',
    url: 'https://bluehousing.co.kr/reviews',
  },
  {
    route: 'estimate',
    title: '무료 견적문의 | 블루하우징',
    desc: '30년 경력 마이스터에게 무료로 견적을 받아보세요. 욕실·주택 리모델링, 실내장식, 건축 컨설팅.',
    url: 'https://bluehousing.co.kr/estimate',
  },
  {
    route: 'location',
    title: '오시는 길 | 블루하우징',
    desc: '서울 서대문구 충정로9길 15 라인빌딩 1층. 5호선 서대문역 1번 출구 도보 3분.',
    url: 'https://bluehousing.co.kr/location',
  },
  {
    route: 'showroom-detail',
    title: '전시장 | 블루하우징',
    desc: '블루하우징 욕실 전시장에서 최신 트렌드 디자인과 자재를 직접 확인하세요.',
    url: 'https://bluehousing.co.kr/showroom-detail',
  },
  {
    route: 'blog',
    title: '블로그 | 블루하우징',
    desc: '블루하우징 네이버 블로그 — 욕실·주택 리모델링 시공 사례와 인테리어 팁을 확인하세요.',
    url: 'https://bluehousing.co.kr/blog',
  },
  {
    route: 'notices',
    title: '공지사항 | 블루하우징',
    desc: '블루하우징 공지사항 및 이벤트 안내.',
    url: 'https://bluehousing.co.kr/notices',
  },
];

let generated = 0;

for (const page of PAGES) {
  let html = baseHtml;

  // <title> 교체
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);

  // meta description 교체
  html = html.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${page.desc}$2`
  );

  // canonical 교체
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    `$1${page.url}$2`
  );

  // og:title 교체
  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    `$1${page.title}$2`
  );

  // og:description 교체
  html = html.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${page.desc}$2`
  );

  // og:url 교체
  html = html.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
    `$1${page.url}$2`
  );

  const dir = path.join(buildDir, page.route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  generated++;
  console.log(`[og-pages] ✅ ${page.route}/index.html`);
}

console.log(`[og-pages] 총 ${generated}개 페이지 생성 완료`);
