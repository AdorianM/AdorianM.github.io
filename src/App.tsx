import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Navigation, {IMenu} from './components/Navigation';
import Gallery from './pages/Gallery';
import Article from './pages/Article';
import Header from './components/Header';

import Spacer from './components/Spacer';


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
    id: 'tech',
    title: 'Tech',
    path: '/tech'
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
        <Header />
        <div>
          <Navigation menus={Menus} />
          <div className='container'>
            <Spacer />
            <Routes>
              <Route path="/" element={<Gallery type={"all"}/>} />

              <Route path="math" element={<Gallery type={"math"}/>} />
              <Route path="physics" element={<Gallery type={"physics"}/>} />
              <Route path="tech" element={<Gallery type={"tech"}/>} />
              <Route path="others" element={<Gallery type={"others"}/>} />

              <Route path="math/:title" element={<Article />} />
              <Route path="physics/:title" element={<Article />} />
              <Route path="tech/:title" element={<Article />} />
              <Route path="others/:title" element={<Article />} />

              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
