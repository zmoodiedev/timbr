import {React, useEffect } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setLoading } from './features/userSlice';
import { auth } from './firebaseConfig';
import Header from './components/layout/header';
import HeaderHome from './components/layout/headerHome';
import Home from './pages/Home';
import Authentication from './authentication/Authentication';
import About from './pages/About';
import Explore from './pages/Explore';
import SubmitCampground from './pages/admin/SubmitCampground';
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


  const user = useSelector((state) => state.data.user.user);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />}/>
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/submit-campground" element={<SubmitCampground />} />
            <Route path='/user/:username' element={user ? <UserProfile /> : <Authentication />} />
            <Route path="/campground/:campgroundId" element={<Campground />} />
            <Route path='*' element={<NotFound />}/>
          </Route>
          <Route path="/" element={<HeadlessLayout />}>
            <Route path="/signup" element={<Authentication />} />
            <Route path="/login" element={<Authentication />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
