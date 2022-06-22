import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Others from './pages/Others';
import Math from './pages/Math';
import Physics from './pages/Physics';
import Design from './pages/Design';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Math" element={<Math />} />
        <Route path="Physics" element={<Physics />} />
        <Route path="Design" element={<Design />} />
        <Route path="/others" element={<Others />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
