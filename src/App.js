import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorView from './components/ActorView';
import HomeView from './components/HomeView';
import MovieView from './components/MovieView';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Favorites from './pages/favorites';
import Reviews from './components/Reviews';
import SubmitReview from './components/SubmitReview';
import ReviewView from './components/ReviewView';

function App() {
  

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movie/:id" element={<MovieView />} />
          <Route path="/actor/:id" element={<ActorView />} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/review/:id" element={<Reviews/>} />
          <Route path="/review/:id" element={<Reviews/>} />
          <Route path="/my-reviews" element={<ReviewView/>} />
        </Routes>
    </Router>
  );
}

export default App;

