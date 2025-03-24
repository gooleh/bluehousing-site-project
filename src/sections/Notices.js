import React from 'react';

const notices = [
  { title: '블루하우징 홈페이지 리뉴얼 안내', date: '2024-03-01' },
  { title: '신규 전시장 오픈 공지', date: '2024-02-10' },
];

const Notices = () => (
  <section className="py-12 px-4 bg-gray-50 max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">공지사항</h2>
    <ul className="space-y-4">
      {notices.map((notice, index) => (
        <li key={index} className="border-b pb-2 flex justify-between">
          <span>{notice.title}</span>
          <span className="text-gray-500 text-sm">{notice.date}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Notices;
