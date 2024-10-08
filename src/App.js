import {React, useEffect } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser, setLoading } from './utilities/UserSlice';
import { auth } from './firebaseConfig';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/layout/header';
import HeaderHome from './components/layout/headerHome';
import Home from './pages/Home';
import Authentication from './authentication/Authentication';
import SignUp from './authentication/SignUp';
import Login from './authentication/Login';
import Explore from './pages/Explore';
import SubmitCampground from './pages/admin/SubmitCampground';
import CampingTips from './pages/CampingTips';
import SubmitTip from './pages/admin/SubmitTip';
import UserProfile from './pages/UserProfile';
import Campground from './pages/Campground';
import Footer from './components/layout/footer';
import NotFound from './pages/404';
import './index.css';
import './styles/variables.css';

function HomeLayout() {
  return (
    <>
      <HeaderHome />
      <Outlet />
      <Footer />
    </>
  )
};

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

function HeadlessLayout() {
  return (
    <>
      <Outlet />
    </>
  )
};

function App() {

  const dispatch = useDispatch();

  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log('User is not logged in');
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />}/>
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="/explore" element={<Explore />} />
            <Route path="/submit-campground" element={<SubmitCampground />} />
            <Route path='/user/:username' element={<UserProfile />} />
            <Route path="/campground/:id" element={<Campground />} />
            <Route path="/camping-tips/" element={<CampingTips />} />
            <Route path="/submit-a-tip/" element={<SubmitTip />} />
            <Route path='*' element={<NotFound />}/>     
          </Route>
          <Route path="/" element={<HeadlessLayout />}>
            <Route path="/auth" element={<Authentication />}>
              <Route path="signup" element={<SignUp />}/>
              <Route path="login" element={<Login />} />
            </Route>
            
          </Route>
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
