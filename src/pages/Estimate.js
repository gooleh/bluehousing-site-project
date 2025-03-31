// src/pages/Estimate.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import bannerEstimate from '../assets/images/slide1.webp';

const Estimate = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: '',
  });
  // 피드백 상태: loading, message, type('success' 또는 'error')
  const [feedback, setFeedback] = useState({
    loading: false,
    message: '',
    type: '',
  });
  // 각 입력 필드별 오류 메시지 저장
  const [errors, setErrors] = useState({});

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // 연락처 유효성 검사 함수 (간단한 숫자, 대시, 공백 허용)
  const validatePhone = (phone) => {
    const re = /^[0-9-+\s()]{10,20}$/;
    return re.test(phone);
  };

  // 폼 전체 유효성 검사
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = '유효한 연락처를 입력해주세요.';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력해주세요.';
    }
    if (!formData.details.trim()) {
      newErrors.details = '문의 내용을 입력해주세요.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 입력 필드 변경 처리: 해당 필드의 오류 메시지를 초기화
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 폼 제출 처리: 추가적인 검증 과정을 거친 후 EmailJS API 호출
  const handleSubmit = (e) => {
    e.preventDefault();
    // 기존 피드백 메시지 초기화
    setFeedback({ loading: false, message: '', type: '' });

    // 폼 유효성 검사
    if (!validateForm()) {
      setFeedback({
        loading: false,
        message: '입력한 정보를 다시 확인해주세요.',
        type: 'error',
      });
      return;
    }

    console.log('견적 요청 데이터:', formData);
    setFeedback({ loading: true, message: '요청 전송 중...', type: '' });

    emailjs
      .sendForm(
        'service_s7zcq5a',      // EmailJS 서비스 ID
        'template_nmuggp3',      // EmailJS 템플릿 ID
        e.target,                // 폼 데이터를 직접 전달
        'NaJirbPrmWdlbKo3H'      // EmailJS 사용자(public) 키
      )
      .then(
        (result) => {
          console.log('이메일 전송 성공:', result.text);
          setFeedback({
            loading: false,
            message: '견적 요청이 성공적으로 전송되었습니다! 빠른 시일 내에 연락드리겠습니다.',
            type: 'success',
          });
          // 성공 시 폼 및 오류 메시지 초기화
          setFormData({ name: '', phone: '', email: '', details: '' });
          setErrors({});
        },
        (error) => {
          console.error('이메일 전송 에러:', error.text);
          setFeedback({
            loading: false,
            message: '요청 전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
            type: 'error',
          });
        }
      );
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="relative w-full h-64 md:h-80">
        <img
          src={bannerEstimate}
          alt="Estimate Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow">
            견적 의뢰 / Request for Estimate
          </h2>
        </div>
      </div>

      <div className="max-w-3xl mx-auto -mt-12 px-4 pb-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-2 text-center">
            아래 양식에 맞춰 정보를 입력해 주시면 빠른 시일 내에 연락드리겠습니다.
          </p>
          <p className="text-gray-500 mb-8 text-center text-sm">
            When you complete the form below, we will contact you with a quick draft.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                성함 <span className="text-sm text-gray-500">(Name)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="예) 홍길동 / e.g. Hong Gil-dong"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                연락처 <span className="text-sm text-gray-500">(Mobile)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="예) 010-1234-5678 / e.g. 010-1234-5678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                이메일 <span className="text-sm text-gray-500">(Email address)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="예) example@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="details" className="block text-gray-700 font-medium mb-2">
                문의/요청 사항 <span className="text-sm text-gray-500">(Inquiries or Questions)</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows="5"
                className={`w-full border ${errors.details ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="시공 위치, 희망 일정, 예산 등 자세한 내용을 알려주세요."
                value={formData.details}
                onChange={handleChange}
              />
              {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
            </div>

            <button
              type="submit"
              disabled={feedback.loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-all duration-200 flex items-center justify-center"
            >
              {feedback.loading && (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              )}
              {feedback.loading ? '전송 중...' : '견적 요청 보내기'}
            </button>
          </form>

          {/* 피드백 메시지 표시 영역 */}
          {feedback.message && (
            <div
              className={`mt-4 text-center text-sm ${
                feedback.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {feedback.message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Estimate;
