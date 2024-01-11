import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import './index.css';
import './styles/variables.css';
import Header from './components/layout/header';
import HeaderHome from './components/layout/headerHome';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Explore from './components/pages/Explore';
import Contact from './components/pages/Contact';
import UserProfile from './components/pages/UserProfile';
import Campground from './components/pages/Campground';
import Footer from './components/layout/footer';

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/campground" element={<Campground />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
