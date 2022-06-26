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

import {IMenu} from './services/Interfaces';


const Menus: IMenu[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/'
  },
  {
    id: 'math',
    title: 'Math',
    path: '/math'
  },
  {
    id: 'physics',
    title: 'Physics',
    path: '/physics'
  },
  {
    id: 'design',
    title: 'Design',
    path: '/design'
  },
  {
    id: 'others',
    title: 'Others',
    path: '/others'
  }
];

function App() {

  return (
      <BrowserRouter>
        <Navigation menus={Menus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Math" element={<Math />} />
          <Route path="Physics" element={<Physics />} />
          <Route path="Design" element={<Design />} />
          <Route path="Others" element={<Others />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
