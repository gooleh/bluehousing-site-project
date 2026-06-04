// src/sections/Notices.js
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import noticeImg from '../assets/images/notice1.jpeg';

const noticeText =
  "[ 욕실공사 ] 기본 시공 순서 철거 - 설비 - 방수 - 전기공사 - 타일 - 천장 - 욕실도기 - 악세서리 - 조명 - 마무리 및 준공 청소 | 타일 덧방 시공 : 3일 (철거 1일, 타일 1일, 욕실기구 셋팅 1일) | 부분 철거 시공 : 4일 (철거 1일, 방수 1일, 타일 1일, 욕실기구 셋팅 1일) | 전체 철거 시공 : 4~5일 (철거 1일, 방수 1~2일, 타일 1일, 욕실 기구 셋팅 1일) ※ 단, 욕실 규격 및 시공 일정에 따라 시공 기간이 상이할 수 있습니다.";

const Notices = () => (
  <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
    <div className="container-content">
      <SectionHeading title="공지사항" english="Notices" moreLink="/notices" />

      <Link to="/notices" className="group block">
        <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-card-hover bg-white dark:bg-gray-800">
          <div className="md:w-1/2 overflow-hidden">
            <img
              src={noticeImg}
              alt="욕실 시공 공지"
              className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ minHeight: '300px' }}
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full bg-brand-50 dark:bg-brand-900/30 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 mb-4">
              시공 안내
            </span>
            <p className="text-ink-soft dark:text-gray-300 leading-relaxed line-clamp-6 md:line-clamp-none">
              {noticeText}
            </p>
            <span className="mt-5 inline-flex items-center text-sm font-medium text-accent-600">
              공지사항 전체보기 →
            </span>
          </div>
        </div>
      </Link>
    </div>
  </section>
);

export default Notices;
