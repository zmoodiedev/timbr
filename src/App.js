import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import './index.css';
import './styles/variables.css';
import Header from './components/header';
import HeaderHome from './components/HeaderHome';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Explore from './components/pages/Explore';
import Contact from './components/pages/Contact';
import UserProfilePage from './components/pages/UserProfile';
import Campground from './components/pages/Campground';
import Footer from './components/footer';

function HomeLayout() {
  return (
    <>
      <HeaderHome />
      <Outlet />
      <Footer />
    </>
  )
}

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />}/>
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/campground" element={<Campground />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
