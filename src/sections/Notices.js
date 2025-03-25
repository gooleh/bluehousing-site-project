import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import noticeImg from '../assets/images/notice1.jpeg';

const noticeText = "[ 욕실공사 ] 기본 시공 순서 철거 - 설비 - 방수 - 전기공사 - 타일 - 천장 - 욕실도기 - 악세사리 - 조명- 마무리 및 준공 청소 | 타일 덧방 시공 : 3일 철거 1일, 타일 1일, 욕실기구셋팅 1일 | 부분 철거 시공 : 4일 철거 1일, 방수 1일, 타일 1일, 욕실기구 셋팅 1일 | 전체 철거 시공 : 4~5일 철거 1일, 방수 1~2일, 타일 1일, 욕실 기구 셋팅 1일 (※ 단,욕실규격 및 시공일정에 따라 시공기간이 상의할수 있음)";

const Notices = () => (
  <section className="py-12 px-4 bg-white max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 
        className="text-2xl md:text-3xl font-semibold text-left"
        style={{ color: 'gray' }}  // 제목 연한 회색
      >
        공지사항
      </h2>
      <Link 
        to="/notices"
        className="flex items-center text-sm px-3 py-1 rounded transition"
        style={{ color: 'gray' }}  // 더보기 버튼 연한 회색
      >
        더보기 <MdArrowForwardIos className="ml-1" />
      </Link>
    </div>
    <hr className="mb-8 border-t-2" style={{ borderColor: 'lightgray' }} />
    <Link to="/notices" className="block">
      <div className="flex flex-col md:flex-row border rounded hover:shadow transition">
        {/* 왼쪽 절반: 이미지 */}
        <div className="md:w-1/2">
          <img 
            src={noticeImg} 
            alt="공지 이미지" 
            className="w-full h-full object-cover"
            style={{ minHeight: '300px' }}  // 이미지 영역의 최소 높이 조정
          />
        </div>
        {/* 오른쪽 절반: 텍스트 */}
        <div className="md:w-1/2 p-6 flex items-center">
          <p className="text-gray-800 text-lg text-left">
            {noticeText}
          </p>
        </div>
      </div>
    </Link>
  </section>
);

export default Notices;
