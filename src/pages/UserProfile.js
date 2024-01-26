import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebaseConfig';
import UserCard from '../components/layout/userCard';
import CampGrid from '../components/campGrid';
import ReviewGrid from '../components/reviewGrid';
import Loader from '../components/common/loader';
import Button from '../components/common/button';

import '../styles/userProfile.css';

const UserProfile = () => {
  const { username, bio, verified } = useParams();
  const auth = getAuth();
  const loggedInUser = auth.currentUser;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState(); 
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userFound, setUserFound] = useState(false);

  const isOwnProfile = loggedInUser && userProfile && 
    (loggedInUser.displayName === username || 
     loggedInUser.uid === userProfile.uid);

     useEffect(() => {
      if (username) {
          fetchUserData(username);
      }
  }, [username]);

  const fetchUserData = async (username) => {
      setIsLoading(true);
      
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));

      try {
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
              setUserProfile(querySnapshot.docs[0].data());
              setUserFound(true);
          } else {
            console.log('No user data found or failed to fetch');
            setUserProfile(null);
            setUserFound(false);
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
          setUserProfile(null);
          setUserFound(false);
      } finally {
          setIsLoading(false);
      }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
        // Update the profile in Firestore
        const userRef = doc(db, 'users', loggedInUser.uid);
        await updateDoc(userRef, editedProfile);

        // Update the local state and exit edit mode
        setUserProfile(editedProfile);
        setIsEditMode(false);
    } catch (error) {
        console.error("Error updating profile: ", error);
        // Handle errors (e.g., show error message)
    }
  };

  if (isLoading) {
    return (
      <div id='userProfile' className='page-container'><Loader /></div>
      )
  }
  
  return (
    <div id='userProfile' className='page-container'>
    {isLoading && (<Loader />)}
    {!userFound && (<h3>The user {username} does not exist.</h3>)}

    {userProfile && (
      <>
        <UserCard
          username={username}
          verified={verified} />
        <div id="userInfo">
          <h1>Member Profile</h1>
          <hr/>
          <h3>Bio</h3>
          {bio ? (
            <p>{bio}</p>
          ) : (
            <p>There is no bio for this user yet.</p>
          )}
          <CampGrid />
          <h3>Member Reviews</h3>
          <ReviewGrid user={userProfile.uid} />
          {isOwnProfile && !isEditMode && (
                    <Button className="btn" onClick={() => setIsEditMode(true)}>Edit Profile</Button>
                )}

                {isOwnProfile && isEditMode && (
                    <form onSubmit={handleProfileUpdate}>
                        <input
                            type="text"
                            value={editedProfile.username}
                            onChange={(e) => setEditedProfile({ ...editedProfile, username: e.target.value })}
                        />
                        
                        <Button className="btn" type="submit">Save Changes</Button>
                        <Button className="btn" onClick={() => setIsEditMode(false)}>Cancel</Button>
                    </form>
                  )}
        </div>

      </>
      )}
    </div>
  );
};

export default UserProfile;