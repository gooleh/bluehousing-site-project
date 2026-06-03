# 블루하우징 공식 웹사이트

**주식회사 블루하우징** 의 공식 홈페이지 소스코드입니다.  
30년 경력 마이스터가 책임 시공하는 종합 인테리어 전문기업.

🌐 **[bluehousing.co.kr](https://bluehousing.co.kr)**

---

## 기술 스택

- **React 19** + Create React App
- **Tailwind CSS** (커스텀 디자인 토큰)
- **React Router v7**
- **GitHub Pages** 정적 배포

## 주요 명령어

```bash
npm start          # 개발 서버 실행 (localhost:3000)
npm run fetch-blog # 네이버 블로그 RSS 수동 동기화
npm run build      # 프로덕션 빌드 (빌드 전 RSS 자동 수집)
npm run deploy     # 빌드 + GitHub Pages 배포
```

## 배포

`npm run deploy` 한 번으로 빌드와 배포가 동시에 진행됩니다.

1. 네이버 블로그 RSS 수집 → `src/data/blogPosts.json` 갱신
2. CRA 프로덕션 빌드
3. `gh-pages` 브랜치에 자동 푸시

> **참고**: 카카오 지도는 `bluehousing.co.kr` 도메인에 SDK 키가 묶여 있어 localhost에서는 빈 화면으로 표시됩니다.
