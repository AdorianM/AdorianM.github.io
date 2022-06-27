import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navigation, {IMenu} from './components/Navigation';
import Gallery from './pages/Gallery';
import Article from './pages/Article';

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
        <div className='container'>
          <Spacer width={260}/>
          <Routes>
            <Route path="/" element={<Gallery type={"all"}/>} />
            <Route path="math" element={<Gallery type={"math"}/>} />
            <Route path="physics" element={<Gallery type={"physics"}/>} />
            <Route path="design" element={<Gallery type={"design"}/>} />
            <Route path="others" element={<Gallery type={"others"}/>} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
