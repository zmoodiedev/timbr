import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Explore from './components/pages/Explore';
import Contact from './components/pages/Contact';
import UserProfilePage from './components/pages/UserProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
