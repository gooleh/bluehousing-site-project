// src/pages/Cases.js
import React from 'react';
import { Link } from 'react-router-dom';
import bannerCases from '../assets/images/banner/banner1.png'; // 배너 이미지 (프로젝트에 맞게 수정)

// 임의의 시공 사례 데이터 (총 9개)
const casesData = [
  {
    id: 1,
    title: '모던 인테리어 사례',
    image: '/assets/images/cases/case1.jpeg',
    description: '심플하고 세련된 디자인과 깔끔한 마감이 돋보이는 모던 인테리어 사례입니다.'
  },
  {
    id: 2,
    title: '브라운 계열 인테리어',
    image: '/assets/images/cases/case2.jpg',
    description: '따뜻한 감성을 전하는 브라운 톤의 인테리어로, 아늑하면서도 고급스러운 분위기를 연출합니다.'
  },
  {
    id: 3,
    title: '전통과 현대의 만남',
    image: '/assets/images/cases/case3.jpg',
    description: '전통적인 요소와 현대적인 디자인이 조화를 이루어 새로운 감각을 선사하는 공간입니다.'
  },
  {
    id: 4,
    title: '럭셔리 인테리어',
    image: '/assets/images/cases/case4.jpg',
    description: '최고급 자재와 세련된 디자인이 돋보이는 럭셔리 인테리어 사례로, 품격있는 공간을 완성했습니다.'
  },
  {
    id: 5,
    title: '미니멀리즘 인테리어',
    image: '/assets/images/cases/case5.jpg',
    description: '불필요한 요소를 배제하고 깔끔함을 강조한 미니멀리즘 인테리어로, 공간의 여백을 극대화했습니다.'
  },
  {
    id: 6,
    title: '실용적 공간 구성',
    image: '/assets/images/cases/case6.jpg',
    description: '효율적인 수납과 기능성을 중시한 실용적인 인테리어 디자인 사례입니다.'
  },
  {
    id: 7,
    title: '자연 친화 인테리어',
    image: '/assets/images/cases/case7.jpg',
    description: '자연 소재와 따뜻한 색감을 활용해 편안하고 자연스러운 분위기를 자아내는 인테리어입니다.'
  },
  {
    id: 8,
    title: '컬러풀 인테리어',
    image: '/assets/images/cases/case8.jpg',
    description: '다채로운 색상과 개성 있는 디자인이 돋보이는 컬러풀 인테리어 사례입니다.'
  },
  {
    id: 9,
    title: '전문가 추천 인테리어',
    image: '/assets/images/cases/case9.jpg',
    description: '전문가들이 강력 추천하는, 최고의 인테리어 디자인과 시공을 경험할 수 있는 사례입니다.'
  },
];

const Cases = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 배너 섹션 */}
      <div className="relative h-64 md:h-80">
        <img
          src={bannerCases}
          alt="Cases Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">시공 사례</h2>
          <p className="text-base md:text-lg">Case Studies</p>
        </div>
      </div>

      {/* 사례 목록 섹션 */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {casesData.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                  <Link to={`/cases/${item.id}`} className="text-blue-600 hover:underline text-sm">
                    자세히 보기 &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
