import React, { useState } from 'react';

const InquiryForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">문의하기</h2>
      <div className="max-w-xl mx-auto">
        {submitted ? (
          <p className="text-green-600 font-semibold">문의가 성공적으로 접수되었습니다!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="이름" required className="w-full border p-3 rounded" />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="연락처" required className="w-full border p-3 rounded" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="문의 내용" required className="w-full border p-3 rounded h-32"></textarea>
            <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">문의하기</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default InquiryForm;
