// 시공 전/후가 제목·파일 순서로 구분된 프로젝트만 정의
// 쌍 규칙: 파일명 순서대로 (전, 후) 번갈아 업로드된 경우 → (1,2), (3,4) …
// 잘못 보이면 before/after 파일명만 바꿔 주세요.
import { galleryImg } from './galleryImages';

const pair = (beforeName, afterName, label) => ({
  before: galleryImg(beforeName),
  after: galleryImg(afterName),
  label,
});

export const beforeAfterProjects = [
  {
    id: 'pierless',
    title: '충정로 피어리스 아파트 | 전체 리모델링 공사',
    pairs: [
      pair('d1', 'd2', '1'),
      pair('d3', 'd4', '2'),
      pair('d5', 'd6', '3'),
      pair('d7', 'd8', '4'),
      pair('d9', 'd10', '5'),
      pair('d11', 'd12', '6'),
      pair('d13', 'd14', '7'),
    ],
  },
  {
    id: 'cheongsan',
    title: '약수동 청산빌라 | 욕실 공사',
    pairs: [pair('f1', 'f2', '1'), pair('f3', 'f4', '2')],
  },
  {
    id: 'geumho',
    title: '목동 금호아파트 | 욕실 공사',
    pairs: [pair('g1', 'g2', '1'), pair('g3', 'g4', '2'), pair('g5', 'g6', '3')],
  },
];
