// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import QuickContact from './components/QuickContact';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ShowroomDetail from './pages/ShowroomDetail';
import LandhouseArticle from './pages/articles/LandhouseArticle';
import MbcArticle from './pages/articles/MbcArticle';
import IndustryArticle from './pages/articles/IndustryArticle';
import ChosunArticle from './pages/articles/ChosunArticle';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Notice from './pages/Notice';
import Estimate from './pages/Estimate';
import Location from './pages/Location';
import Reviews from './pages/Reviews';

function App() {
  return (
    <HelmetProvider>
      <Router basename="">
        <ScrollToTop />
        <Header />

        <main className="min-h-screen">
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
          </Routes>
        </main>

        <Footer />
        <QuickContact />
        {/* 모바일 하단 액션바 높이만큼 여백 확보 */}
        <div className="md:hidden h-14" aria-hidden="true" />
      </Router>
    </HelmetProvider>
  );
}

export default App;
