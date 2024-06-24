import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Tech from './Tech/Tech';
import News from './News/News';
import Sports from './Sports/Sports'
//import Political from './Political/Political'
import Movies from './Movies/Movies'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/movies" element={<Movies/>}/>
        </Routes>
      </Router>
    </div>
  );
}
