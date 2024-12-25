import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MorningAdhkar from './pages/MorningAdhkar';
import EveningAdhkar from './pages/EveningAdhkar';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/morning" element={<MorningAdhkar />} />
      <Route path="/evening" element={<EveningAdhkar />} />
    </Routes>
  </Router>
);

export default App;
