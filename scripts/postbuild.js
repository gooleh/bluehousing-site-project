/**
 * scripts/postbuild.js
 * 1. OG 태그가 올바른 정적 HTML 페이지 생성 (소셜 공유용)
 * 2. build/index.html → build/404.html 복사 (GitHub Pages SPA 라우팅)
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

// 1. OG 페이지 생성
try {
  execSync('node scripts/generate-og-pages.js', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });
} catch (err) {
  console.warn('[postbuild] ⚠️  OG 페이지 생성 실패:', err.message);
}

// 2. 404.html 복사
const src = path.join(buildDir, 'index.html');
const dest = path.join(buildDir, '404.html');
fs.copyFileSync(src, dest);
console.log('[postbuild] ✅ 404.html 업데이트 완료');
