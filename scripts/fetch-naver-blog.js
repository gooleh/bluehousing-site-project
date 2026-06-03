/**
 * 네이버 블로그 RSS → src/data/blogPosts.json
 * GitHub Pages 배포 전 prebuild에서 실행됩니다.
 */
const fs = require('fs');
const path = require('path');

const RSS_URL = 'https://rss.blog.naver.com/bluehousing1.xml';
const BLOG_ID = 'bluehousing1';
const EXCLUDE_CATEGORIES = new Set(['인테리어정보']);
const OUT_FILE = path.join(__dirname, '../src/data/blogPosts.json');

function extractCdata(block, tag) {
  const cdataRe = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  const cdataMatch = block.match(cdataRe);
  if (cdataMatch) return cdataMatch[1].trim();
  const plainRe = new RegExp(`<${tag}>([^<]*)<\\/${tag}>`, 'i');
  const plainMatch = block.match(plainRe);
  return plainMatch ? plainMatch[1].trim() : '';
}

function stripHtml(html) {
  return html
    .replace(/<img[^>]*>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, ' ')
    .replace(/\.{3,}/g, '…')
    .trim();
}

function extractFirstImage(html) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

function cleanLink(link) {
  const base = link.split('?')[0];
  if (base.includes(`/${BLOG_ID}/`)) return base;
  const idMatch = link.match(/(\d{10,})/);
  return idMatch ? `https://blog.naver.com/${BLOG_ID}/${idMatch[1]}` : base;
}

function parseItems(xml) {
  const items = [];
  const blocks = xml.split(/<item>/i).slice(1);

  blocks.forEach((block) => {
    const chunk = block.split(/<\/item>/i)[0];
    const title = extractCdata(chunk, 'title');
    const link = extractCdata(chunk, 'link');
    const descriptionRaw = extractCdata(chunk, 'description');
    const pubDate = extractCdata(chunk, 'pubDate');
    const category = extractCdata(chunk, 'category');

    if (!title || !link) return;
    // 블로그 글만 (댓글·기타 activity 제외)
    if (!chunk.includes('schema/1.0/blog-entry')) return;

    const idMatch = link.match(/(\d{10,})/);
    const id = idMatch ? idMatch[1] : link;

    items.push({
      id,
      title,
      description: stripHtml(descriptionRaw),
      image: extractFirstImage(descriptionRaw),
      link: cleanLink(link),
      pubDate,
      category: category || '',
    });
  });

  return items;
}

async function main() {
  const response = await fetch(RSS_URL, {
    headers: { 'User-Agent': 'BlueHousingSite/1.0 (blog sync)' },
  });

  if (!response.ok) {
    throw new Error(`RSS fetch failed: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const posts = parseItems(xml).filter((p) => !EXCLUDE_CATEGORIES.has(p.category));

  posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  const seen = new Set();
  const unique = posts.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  const payload = {
    blogId: BLOG_ID,
    blogUrl: `https://blog.naver.com/${BLOG_ID}`,
    fetchedAt: new Date().toISOString(),
    count: unique.length,
    posts: unique,
  };

  fs.writeFileSync(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`[fetch-naver-blog] Saved ${unique.length} posts → ${OUT_FILE}`);
}

main().catch((err) => {
  console.error('[fetch-naver-blog]', err.message);
  const existing = OUT_FILE;
  if (fs.existsSync(existing)) {
    console.warn('[fetch-naver-blog] Using existing blogPosts.json');
    process.exit(0);
  }
  process.exit(1);
});
