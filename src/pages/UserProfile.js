import React from 'react';
import UserCard from '../components/layout/userCard';
import CardGrid from '../components/cardGrid';
import ReviewGrid from '../components/reviewGrid';

import '../styles/userProfile.css';

const UserProfile = () => {
  
  return (
    <div id='userProfile' className='container'>
      <UserCard />
      <div id="userInfo">
        <h1>Member Profile</h1>
        <hr/>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <h3>Favourite Campgrounds</h3>
        <CardGrid />
        <h3>Member Reviews</h3>
        <ReviewGrid />
      </div>
    </div>
  );
};

export default UserProfile;