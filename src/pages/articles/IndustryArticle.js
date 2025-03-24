import React from 'react';
import { Link } from 'react-router-dom';

const IndustryArticle = () => {
  const actualLink = "https://www.hankyung.com/article/2010020276781?nv=o"; // 실제 기사 링크 예시

  return (
    <div className="max-w-5xl mx-auto pt-24 py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">한국경제산업 기사</h1>
      <p className="text-sm text-gray-500 mb-6">2010-02-02 14:09</p>
      <div className="text-lg text-gray-800 leading-relaxed space-y-4 mb-6">
        <p>짜증! 아파트 위층 욕실 물소리… "줄여드립니다"</p>
        <p>
          | 한샘, 소음 최소화 시스템 선보여  
          | 조립식으로 간편하게 설치
        </p>
        <p>
          아파트 위층의 욕실에서 나는 배수 소음을 줄인 신개념의 시스템 욕실이 나왔다.
        </p>
        <p>
          종합 홈 인테리어 기업인 한샘(대표 최양하)은 아파트 층간 배수 소음을 최소화하고 설치한 뒤 리모델링도 쉬운 조립식 욕실을 국내 처음으로 개발, 시장 공략에 나선다고 2일 밝혔다.
        </p>
        <p>
          이 제품에는 층상(層上)배관 공법이 적용됐다. 욕실 바닥 밑의 약 20㎝ 공간에 설치한 배수관 등을 통해 물이 빠져 나가도록 유도, 소음이 아래층에 전달되지 않으며 리모델링 시에도 아랫집의 욕실 천장을 뜯지 않고 공사할 수 있다.
        </p>
        <p>
          회사 측에 따르면 국내에서 대형 건설사를 중심으로 여러 차례 층상배관 공법을 개발하려고 시도했으나 바닥의 울림 현상, 배관 연결의 어려움, 점검 및 보수의 애로 등으로 상용화하지 못했다.
        </p>
        <p>
          회사 측은 기존 아파트의 욕실 배수 소음이 57㏈ 정도였으나 이와 유사한 제품을 사용한 일본의 경우 약 35㏈로 줄어들었다고 설명했다. 이번에 개발한 조립식 욕실은 다양한 욕실 규격에 설치할 수 있고 바닥 울림 현상도 최소화했다. 또 바닥 밑에 파이프관을 집어 넣어 난방 기능도 갖췄다. 조립식이어서 내부 벽의 타일 등이 모두 부착된 상태로 설치할 수 있다는 것도 장점이다.
        </p>
        <p>
          한샘 욕실사업부 이존경 차장은 "새로운 공법의 욕실 시스템을 서울 방배동 본사 사옥에 전시, SH공사 코오롱건설 등을 대상으로 품평회를 갖고 있다"며 "3월께 정식 쇼룸을 열고 상반기 중 제품을 출시할 예정"이라고 말했다.
        </p>
        <p>
          한샘은 기존 아파트의 경우 하루 만에 철거 및 시공이 가능한 리모델링용 제품도 개발해 현장 테스트 중이며 4월께 내놓을 예정이다. 이 제품 가격은 기본형인 1500×2000㎜ 기준으로 300만원대.
        </p>
        <p>
          회사 측은 국내 욕실시장은 약 2조원으로 추정되며 현재 5% 정도에 불과한 조립식 욕실 비중이 향후 크게 늘어날 것으로 예상하고 있다.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link to="/" className="text-blue-600 hover:underline">
          홈으로 돌아가기
        </Link>
        <a 
          href={actualLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          기사 보러가기 &rarr;
        </a>
      </div>
    </div>
  );
};

export default IndustryArticle;
