import React from 'react';
// 임시로 placeholder 사용
const aboutImg = "https://via.placeholder.com/600x400?text=About+Image";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img src={aboutImg} alt="About Blue Housing" className="rounded-lg shadow-lg object-cover w-full" />
        </div>
        <div className="md:w-1/2">
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default About;
