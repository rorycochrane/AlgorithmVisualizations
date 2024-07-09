// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import BubbleSortPage from './pages/BubbleSortPage';
import GnomeSortPage from './pages/GnomeSortPage';
import InsertionSortPage from './pages/InsertionSortPage';
import BogoSortPage from './pages/BogoSortPage';
import QuickSortPage from './pages/QuickSortPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout text={<Home />} />} />
        <Route path="/about" element={<Layout text={<About />} />} />
        <Route path="/post" element={<Layout text={<Post />} />} />
        <Route
          path="/bubblesort"
          element={<Layout {...BubbleSortPage()} />}
        />
        <Route
          path="/gnomesort"
          element={<Layout {...GnomeSortPage()} />}
        />
        <Route
          path="/insertionsort"
          element={<Layout {...InsertionSortPage()} />}
        />
        <Route
          path="/bogosort"
          element={<Layout {...BogoSortPage()} />}
        />
        <Route
          path="/quicksort"
          element={<Layout {...QuickSortPage()} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
