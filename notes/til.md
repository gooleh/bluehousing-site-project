# TIL

**[라우트 코드 스플리팅]** — React Router 페이지를 `React.lazy`로 감싸면 페이지별 JS가 별도 청크로 분리된다.
> CRA/Webpack이 `import()` 지점마다 청크를 자동 분할한다. 이 사이트는 14개 페이지를 lazy 전환해 메인 번들이 185→129kB(gzip)로 30% 줄었다. 첫 진입 페이지(Home)는 lazy로 만들면 오히려 LCP가 늦어지므로 eager로 남기는 것이 정석.

**[FAQPage 구조화 데이터]** — FAQ 콘텐츠에 JSON-LD `FAQPage` 스키마를 넣으면 구글 검색 리치 결과 후보가 된다.
> 화면에 보이는 질문/답변과 JSON-LD 내용이 일치해야 하며(불일치 시 스팸 처리 위험), 데이터를 한 곳(상수 배열)에 두고 UI와 스키마가 공유하도록 만들면 어긋날 일이 없다. SPA에서는 react-helmet-async로 `<script type="application/ld+json">`을 head에 주입한다.

**[PWA 서비스워커 캐시 버전]** — 정적 자산을 Cache-First로 캐싱하는 SW는 배포 때마다 캐시 버전을 올려야 한다.
> 버전을 안 올리면 기존 방문자가 구버전 자산을 계속 보게 된다. 이 사이트는 `CACHE_VERSION` 상수를 수동으로 올리는 방식(v3)이라 코드 변경 배포 시 반드시 함께 수정해야 한다.
