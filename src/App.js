// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import SideToolbar from './components/SideToolbar'; // 새로 추가
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ShowroomDetail from './pages/ShowroomDetail';
import LandhouseArticle from './pages/articles/LandhouseArticle';
import MbcArticle from './pages/articles/MbcArticle';
import IndustryArticle from './pages/articles/IndustryArticle';
import ChosunArticle from './pages/articles/ChosunArticle';
import Blog from './pages/Blog';
import Notice from './pages/Notice';
import Estimate from './pages/Estimate';
// 오시는길 페이지
import Location from './pages/Location'; // <- 새로 추가

function App() {
  return (
    <HelmetProvider>
      <Router basename="/bluehousing-site-project">
        <Header />
        <SideToolbar />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/showroom-detail" element={<ShowroomDetail />} />
            <Route path="/articles/landhouse" element={<LandhouseArticle />} />
            <Route path="/articles/mbc" element={<MbcArticle />} />
            <Route path="/articles/industry" element={<IndustryArticle />} />
            <Route path="/articles/chosun" element={<ChosunArticle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/notices" element={<Notice />} />
            <Route path="/estimate" element={<Estimate />} />

            {/* 오시는길 라우터 추가 */}
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
