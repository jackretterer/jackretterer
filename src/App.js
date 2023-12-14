import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;
