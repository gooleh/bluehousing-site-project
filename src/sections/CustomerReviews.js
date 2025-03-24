import React from 'react';

const reviews = [
  { name: '홍길동', content: '시공이 정말 꼼꼼하게 잘 되었어요. 강력 추천합니다!' },
  { name: '김철수', content: '상담부터 시공까지 빠르고 친절하게 처리해주셨어요. 감사합니다.' },
];

const CustomerReviews = () => (
  <section className="py-12 px-4 bg-gray-50 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">고객 이용후기</h2>
    <div className="max-w-4xl mx-auto space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="border rounded-lg p-6 shadow bg-white">
          <p className="text-gray-700 mb-2">"{review.content}"</p>
          <p className="text-sm text-gray-500">- {review.name} -</p>
        </div>
      ))}
    </div>
  </section>
);

export default CustomerReviews;
