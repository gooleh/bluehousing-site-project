import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">서비스</h1>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/assets/images/service1.png" alt="주택 설계" className="w-32 h-32 object-contain" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">주택 설계</h2>
            <p className="text-gray-700">
              고객의 라이프스타일과 요구를 반영한 맞춤형 설계를 통해, 이상적인 주거 환경을 창조합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/assets/images/service2.png" alt="인테리어 디자인" className="w-32 h-32 object-contain" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">인테리어 디자인</h2>
            <p className="text-gray-700">
              기능성과 심미성을 겸비한 인테리어 솔루션을 제공하여, 공간의 가치를 극대화합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/assets/images/service3.png" alt="건축 컨설팅" className="w-32 h-32 object-contain" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">건축 컨설팅</h2>
            <p className="text-gray-700">
              전문 컨설턴트와의 1:1 상담을 통해, 고객에게 최적의 건축 및 리모델링 솔루션을 제시합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
