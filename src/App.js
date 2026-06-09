// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import QuickContact from './components/QuickContact';
import Footer from './components/Footer';
import Home from './pages/Home';
import usePageTracking from './hooks/usePageTracking';

// 라우트 코드 스플리팅 — Home(첫 진입·LCP)만 즉시 로드, 나머지는 방문 시 로드
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ShowroomDetail = lazy(() => import('./pages/ShowroomDetail'));
const LandhouseArticle = lazy(() => import('./pages/articles/LandhouseArticle'));
const MbcArticle = lazy(() => import('./pages/articles/MbcArticle'));
const IndustryArticle = lazy(() => import('./pages/articles/IndustryArticle'));
const ChosunArticle = lazy(() => import('./pages/articles/ChosunArticle'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Notice = lazy(() => import('./pages/Notice'));
const Estimate = lazy(() => import('./pages/Estimate'));
const Location = lazy(() => import('./pages/Location'));
const Reviews = lazy(() => import('./pages/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound'));

// GA4 페이지 트래킹 — Router 내부에서 useLocation을 사용하기 위해 별도 컴포넌트로 분리
const Analytics = () => {
  usePageTracking();
  return null;
};

function App() {
  return (
    <ThemeProvider>
    <HelmetProvider>
      <Router basename="">
        <Analytics />
        <ScrollToTop />
        <Header />

        <main className="min-h-screen">
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <div className="w-10 h-10 rounded-full border-[3px] border-brand-100 dark:border-gray-700 border-t-brand-600 dark:border-t-brand-400 animate-spin" />
              </div>
            }
          >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Navigate to="/estimate" replace />} />
            <Route path="/showroom-detail" element={<ShowroomDetail />} />
            <Route path="/articles/landhouse" element={<LandhouseArticle />} />
            <Route path="/articles/mbc" element={<MbcArticle />} />
            <Route path="/articles/industry" element={<IndustryArticle />} />
            <Route path="/articles/chosun" element={<ChosunArticle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/notices" element={<Notice />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="/location" element={<Location />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>

        <Footer />
        <QuickContact />
        {/* 모바일 하단 액션바 높이만큼 여백 확보 */}
        <div className="md:hidden h-14" aria-hidden="true" />
      </Router>
    </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
