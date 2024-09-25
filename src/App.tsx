import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Home from './pages/home';
import WhitepaperSICK from './pages/whitepaper';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/whitepaper" element={<WhitepaperSICK />} />
      </Routes>
    </Router>
  );
};

export default App;
