import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
