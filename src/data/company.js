// src/data/company.js
// 회사 공통 정보 단일 출처(single source of truth).
// 연락처/주소/계좌 등이 여러 컴포넌트에 하드코딩되어 있던 것을 이곳으로 통합.

const company = {
  nameKo: '주식회사 블루하우징',
  nameEn: 'Blue Housing',
  brand: 'BlueHousing',
  tagline: '30년 경력 마이스터가 시공하는 종합 인테리어 전문기업',
  owner: '이존경',

  // 전화 (tel: 링크용 raw + 표시용 display)
  phone: { raw: '02-393-9759', display: '02-393-9759' },
  mobile: { raw: '010-2264-9759', display: '010-2264-9759' },
  email: 'astarblue@naver.com',

  // 주소
  roadAddress: '서울 서대문구 충정로9길 15 라인빌딩 1층',
  jibunAddress: '서울시 서대문구 충정로2가 180-5 라인빌딩 1층',
  addressDetail: '(서대문역 1번 출구에서 약 234m, 건물 주차장 옆 계단 2층)',
  bizNumber: '629-88-01069',

  transit: '5호선 서대문역 1번 출구 도보 3분 / 버스 인창중고 정류장 하차 후 도보 1분',

  // 지도 (카카오맵·길찾기 공통)
  map: {
    name: '블루하우징',
    lat: 37.5642896,
    lng: 126.9645037,
  },

  // 계좌
  account: {
    holder: '주식회사블루하우징',
    bank: '국민은행',
    number: '01120104196753',
  },

  // SNS / 외부 링크
  sns: {
    talkTalk: 'https://talk.naver.com/ct/wchj2m',
    naverBlog: 'https://blog.naver.com/bluehousing1',
    naverCafe: 'https://cafe.naver.com/',
    facebook: 'https://www.facebook.com/',
    band: 'https://band.us/',
  },
};

/** 푸터 등에 노출할 SNS — placeholder URL은 제외 */
export const activeSnsLinks = [
  { href: company.sns.naverBlog, label: '네이버 블로그', key: 'naverBlog' },
  { href: company.sns.naverCafe, label: '네이버 카페', key: 'naverCafe' },
  { href: company.sns.facebook, label: '페이스북', key: 'facebook' },
  { href: company.sns.band, label: '네이버 밴드', key: 'band' },
].filter(({ href }) => href && !isPlaceholderSnsUrl(href));

function isPlaceholderSnsUrl(url) {
  const placeholders = new Set([
    'https://cafe.naver.com/',
    'https://www.facebook.com/',
    'https://band.us/',
  ]);
  return placeholders.has(url);
}

export default company;
