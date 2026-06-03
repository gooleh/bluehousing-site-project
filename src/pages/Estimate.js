// src/pages/Estimate.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import { FiCamera } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import company from '../data/company';
import bannerEstimate from '../assets/images/slide1.webp';

const SERVICE_OPTIONS = ['욕실 리모델링', '주방 리모델링', '주택 리모델링', '실내장식', '건축 컨설팅', '기타'];
const SCHEDULE_OPTIONS = ['1개월 이내', '1~3개월', '3~6개월', '시기 미정'];
const BUDGET_OPTIONS = ['500만원 미만', '500만원 ~ 1,000만원', '1,000만원 ~ 3,000만원', '3,000만원 이상', '예산 미정'];

const inputClass = (hasError) =>
  `w-full rounded-xl border px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 ${
    hasError ? 'border-red-400 bg-red-50/40' : 'border-ink/15'
  }`;

const Label = ({ htmlFor, ko, en, required }) => (
  <label htmlFor={htmlFor} className="block text-ink font-semibold mb-2">
    {ko}
    {required && <span className="text-red-400 ml-0.5">*</span>}{' '}
    <span className="text-sm text-ink-muted font-normal">({en})</span>
  </label>
);

const pillBase = 'rounded-full px-4 py-2 text-sm font-medium border transition-all';
const pillActive = 'bg-brand-600 text-white border-brand-600';
const pillInactive = 'bg-white text-ink-soft border-ink/20 hover:border-brand-400 hover:text-brand-600';

const INIT = { name: '', phone: '', email: '', serviceType: [], location: '', schedule: '', budget: '', details: '' };

const Estimate = () => {
  const [formData, setFormData] = useState(INIT);
  const [feedback, setFeedback] = useState({ loading: false, message: '', type: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validatePhone = (v) => /^[0-9\-+\s()]{10,20}$/.test(v);

  const validateForm = () => {
    const e = {};
    if (!formData.name.trim()) e.name = '이름을 입력해주세요.';
    if (!validatePhone(formData.phone)) e.phone = '유효한 연락처를 입력해주세요.';
    if (!validateEmail(formData.email)) e.email = '유효한 이메일 주소를 입력해주세요.';
    if (formData.serviceType.length === 0) e.serviceType = '시공 종류를 하나 이상 선택해주세요.';
    if (!formData.details.trim()) e.details = '문의 내용을 입력해주세요.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setErrors((prev) => ({ ...prev, serviceType: '' }));
    setFormData((prev) => ({
      ...prev,
      serviceType: prev.serviceType.includes(service)
        ? prev.serviceType.filter((s) => s !== service)
        : [...prev.serviceType, service],
    }));
  };

  const setOption = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback({ loading: false, message: '', type: '' });
    if (!validateForm()) {
      setFeedback({ loading: false, message: '입력한 정보를 다시 확인해주세요.', type: 'error' });
      return;
    }
    setFeedback({ loading: true, message: '요청 전송 중...', type: '' });
    emailjs
      .sendForm('service_s7zcq5a', 'template_nmuggp3', e.target, 'NaJirbPrmWdlbKo3H')
      .then(
        () => {
          setFeedback({ loading: false, message: '견적 요청이 성공적으로 전송되었습니다! 빠른 시일 내에 연락드리겠습니다.', type: 'success' });
          setFormData(INIT);
          setErrors({});
        },
        (err) => {
          console.error('이메일 전송 에러:', err.text);
          setFeedback({ loading: false, message: '요청 전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.', type: 'error' });
        }
      );
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>견적문의 | 블루하우징</title>
        <meta name="description" content="블루하우징 무료 견적 문의. 시공 종류, 위치, 희망 일정, 예산 등을 남겨주시면 30년 경력 마이스터가 빠르게 상담해 드립니다." />
      </Helmet>

      <PageHero
        image={bannerEstimate}
        english="Request for Estimate"
        title="견적 의뢰"
        subtitle="간단한 정보만 남겨주시면 빠른 시일 내에 연락드리겠습니다."
      />

      <div className="max-w-3xl mx-auto -mt-16 px-4 pb-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-card p-7 md:p-10">
          <p className="text-ink-soft mb-2 text-center font-medium">
            아래 양식에 맞춰 정보를 입력해 주시면 빠른 시일 내에 연락드리겠습니다.
          </p>
          <p className="text-ink-muted mb-8 text-center text-sm">
            When you complete the form below, we will contact you with a quick draft.
          </p>

          <form onSubmit={handleSubmit} className="space-y-7">

            {/* 성함 */}
            <div>
              <Label htmlFor="name" ko="성함" en="Name" required />
              <input
                type="text" id="name" name="name"
                className={inputClass(errors.name)}
                placeholder="예) 홍길동"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1.5">{errors.name}</p>}
            </div>

            {/* 연락처 */}
            <div>
              <Label htmlFor="phone" ko="연락처" en="Mobile" required />
              <input
                type="tel" id="phone" name="phone"
                className={inputClass(errors.phone)}
                placeholder="예) 010-1234-5678"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1.5">{errors.phone}</p>}
            </div>

            {/* 이메일 */}
            <div>
              <Label htmlFor="email" ko="이메일" en="Email" required />
              <input
                type="email" id="email" name="email"
                className={inputClass(errors.email)}
                placeholder="예) example@domain.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>}
            </div>

            {/* 시공 종류 */}
            <div>
              <Label ko="시공 종류" en="Service Type" required />
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((s) => (
                  <button
                    key={s} type="button"
                    onClick={() => toggleService(s)}
                    className={`${pillBase} ${formData.serviceType.includes(s) ? pillActive : pillInactive}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <input type="hidden" name="service_type" value={formData.serviceType.join(', ') || '미선택'} />
              {errors.serviceType && <p className="text-red-500 text-sm mt-1.5">{errors.serviceType}</p>}
            </div>

            {/* 시공 위치 */}
            <div>
              <Label htmlFor="location" ko="시공 위치" en="Location" />
              <input
                type="text" id="location" name="location"
                className={inputClass(false)}
                placeholder="예) 서울 마포구, 경기 고양시 등"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* 희망 시공 시기 */}
            <div>
              <Label ko="희망 시공 시기" en="Preferred Schedule" />
              <div className="flex flex-wrap gap-2">
                {SCHEDULE_OPTIONS.map((s) => (
                  <button
                    key={s} type="button"
                    onClick={() => setOption('schedule', s)}
                    className={`${pillBase} ${formData.schedule === s ? pillActive : pillInactive}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <input type="hidden" name="schedule" value={formData.schedule || '미선택'} />
            </div>

            {/* 예산 범위 */}
            <div>
              <Label ko="예산 범위" en="Budget Range" />
              <div className="flex flex-wrap gap-2">
                {BUDGET_OPTIONS.map((b) => (
                  <button
                    key={b} type="button"
                    onClick={() => setOption('budget', b)}
                    className={`${pillBase} ${formData.budget === b ? pillActive : pillInactive}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <input type="hidden" name="budget" value={formData.budget || '미선택'} />
            </div>

            {/* 문의/요청 사항 */}
            <div>
              <Label htmlFor="details" ko="문의/요청 사항" en="Details" required />
              <textarea
                id="details" name="details" rows="5"
                className={inputClass(errors.details)}
                placeholder="추가로 전달하고 싶은 내용을 자유롭게 적어주세요."
                value={formData.details}
                onChange={handleChange}
              />
              {errors.details && <p className="text-red-500 text-sm mt-1.5">{errors.details}</p>}
            </div>

            {/* 현장 사진 안내 */}
            <div className="rounded-xl bg-brand-50 border border-brand-100 p-4 flex gap-3">
              <FiCamera className="text-brand-600 text-xl flex-shrink-0 mt-0.5" />
              <div className="text-sm text-ink-soft leading-relaxed">
                <p className="font-semibold text-ink mb-1">현장 사진 첨부 안내</p>
                <p>현장 사진이 있으면 더 정확한 견적이 가능합니다.</p>
                <p className="mt-1">
                  사진은{' '}
                  <a href={company.sns.talkTalk} target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-brand-700 hover:underline">
                    네이버 톡톡
                  </a>
                  {' '}또는 이메일{' '}
                  <a href={`mailto:${company.email}`}
                    className="font-semibold text-brand-700 hover:underline">
                    {company.email}
                  </a>
                  {' '}로 보내주세요.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={feedback.loading}
              className="w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center shadow-soft"
            >
              {feedback.loading && (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {feedback.loading ? '전송 중...' : '견적 요청 보내기'}
            </button>
          </form>

          {feedback.message && (
            <div className={`mt-4 text-center text-sm ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {feedback.message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Estimate;
