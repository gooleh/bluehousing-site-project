// 네이버 블로그 RSS 동기화 결과 (scripts/fetch-naver-blog.js)
// 수동 편집 대신: npm run fetch-blog
import data from './blogPosts.json';

const blogPosts = data.posts;

export const blogMeta = {
  blogId: data.blogId,
  blogUrl: data.blogUrl,
  fetchedAt: data.fetchedAt,
  count: data.count,
};

export default blogPosts;
