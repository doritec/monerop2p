import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Trade } from './pages/Trade';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trade/:username" element={<Trade />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;