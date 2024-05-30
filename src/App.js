import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Tag from './components/Tag';
import Top3Days from './components/Top3Days';
import Top7Days from './components/Top7Days';
import Top30Days from './components/Top30Days';
import Top60Days from './components/Top60Days';
import Search from './components/Search';

const tags = [
  "XIUREN", "MyGirl", "XiaoYu", "DJAWA-Photo", "Cosplay", "YouMi", 
  "CreamSoda", "Pure-Media", "MFStar", "ISHOW", "Moon-Night-Snap", 
  "Loozy", "IMISS", "HuaYang", "SAINT-Photolife", "BLUECAKE"
];

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            {tags.map(tag => (
              <Route key={tag} path={`/tag/${tag}`} element={<Tag tag={tag} />} />
            ))}
            <Route path="/top3days" element={<Top3Days />} />
            <Route path="/top7days" element={<Top7Days />} />
            <Route path="/top30days" element={<Top30Days />} />
            <Route path="/top60days" element={<Top60Days />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
