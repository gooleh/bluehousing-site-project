// src/sections/WhyUs.js
import React from 'react';
import { RiMedalLine, RiShieldCheckLine, RiHammerLine, RiLeafLine } from 'react-icons/ri';
import SectionHeading from '../components/SectionHeading';

const strengths = [
  {
    icon: RiMedalLine,
    title: '30년 경력 마이스터',
    desc: '한 분야에 30년. 수많은 현장에서 쌓인 노하우로 어떤 공간이든 완성도 높게 마무리합니다.',
  },
  {
    icon: RiHammerLine,
    title: '직접 책임 시공',
    desc: '하도급에 넘기지 않고 숙련된 전문팀이 직접 시공합니다. 공정 하나하나를 책임집니다.',
  },
  {
    icon: RiShieldCheckLine,
    title: '시공 후 A/S 보장',
    desc: '시공으로 끝이 아닙니다. 완공 후에도 보증 기간 내 무상 점검·수리로 끝까지 책임집니다.',
  },
  {
    icon: RiLeafLine,
    title: '친환경 자재 사용',
    desc: '가족의 건강을 위해 검증된 친환경 자재와 자체 연구개발 건축자재를 사용합니다.',
  },
];

const WhyUs = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container-content">
      <SectionHeading title="왜 블루하우징인가" english="Why BlueHousing" align="center" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {strengths.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group text-center rounded-2xl border border-ink/5 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
              <Icon className="text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
            <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
