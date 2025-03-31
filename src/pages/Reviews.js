// src/pages/Reviews.js
import React from 'react';
import { RiStarFill } from 'react-icons/ri';
import bannerReviews from '../assets/images/slide1.webp'; // 배너 이미지 경로 (실제 경로로 수정)

const reviews = [
  {
    name: '김민수',
    text: '서비스가 정말 훌륭합니다. 상담부터 시공까지 모든 과정이 만족스러워 다시 이용하고 싶습니다.'
  },
  {
    name: '이영희',
    text: '인테리어 디자인이 세련되고 깔끔합니다. 집안 분위기가 완전히 달라졌어요.'
  },
  {
    name: '박지훈',
    text: '전문가의 꼼꼼한 시공 덕분에 기대 이상으로 만족스러운 결과를 얻었습니다.'
  },
  {
    name: '최수진',
    text: '빠른 상담과 친절한 서비스로 믿고 맡길 수 있었습니다. 강력 추천합니다.'
  },
  {
    name: '정하늘',
    text: '최신 트렌드를 반영한 인테리어로, 집이 더욱 편안하고 스타일리시해졌습니다.'
  },
  {
    name: '오현우',
    text: '세심한 상담과 합리적인 가격에 감동받았습니다. 앞으로도 꾸준히 이용할 예정입니다.'
  },
  {
    name: '한유진',
    text: '디자인, 시공, 애프터 서비스까지 전반적으로 만족스러운 경험을 했습니다.'
  },
  {
    name: '신동혁',
    text: '프로페셔널한 팀 덕분에 집이 한층 고급스러워졌어요. 다시 추천하고 싶습니다.'
  },
  {
    name: '장세영',
    text: '인테리어 업계의 혁신을 이끄는 블루하우징, 결과에 큰 만족을 느낍니다.'
  },
];

// 이름 마스킹 함수: 한국 이름은 보통 성 1자 + 이름 2자로 구성되므로, 성만 표시하고 나머지는 ** 처리
const maskName = (fullName) => {
  if (!fullName) return '';
  return fullName[0] + '**';
};

const Reviews = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 배너 섹션 */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={bannerReviews}
          alt="Reviews Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow">
            이용후기
          </h2>
          <p className="text-lg md:text-xl drop-shadow">
            Reviews
          </p>
        </div>
      </div>

      {/* 리뷰 목록 섹션 */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col">
              <div className="flex items-center mb-4">
                {/* 5개의 별 아이콘 */}
                <div className="flex text-yellow-500 mr-2">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </div>
                <span className="font-bold text-gray-800">
                  {maskName(review.name)}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
