import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchUserData from '../hooks/fetchUserData';
import { doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { db } from '../firebaseConfig';
import UserCard from '../components/userCard';
import UserInfo from '../components/userInfo';
import CampGrid from '../components/campGrid';
import ReviewGrid from '../components/reviewGrid';
import Loader from '../components/common/loader';


import '../styles/userProfile.css';

const UserProfile = () => {
  const { username } = useParams();
  const { userProfile, isLoading, userFound } = useFetchUserData(username);
  const auth = getAuth();
  const loggedInUser = auth.currentUser;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});

  const isOwnProfile = loggedInUser && userProfile && 
    (loggedInUser.displayName?.toLowerCase() === username.toLowerCase() || 
     loggedInUser.uid === userProfile.uid);
    
    useEffect(() => {
      if (userProfile && isEditMode) {
          setEditedProfile(userProfile);
      }
    }, [userProfile, isEditMode]);
    

    const uploadProfilePicture = async (file) => {
      const storage = getStorage();
      const storageRef = ref(storage, 'profilePics/' + file.name); // Customize the path as needed
  
      try {
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          return downloadURL;
      } catch (error) {
          console.error("Error uploading file: ", error);
          throw error; // Rethrow the error for handling it in the calling function
      }
    };

    const handleProfileUpdate = async (e) => {
      e.preventDefault();
      
      try {
        let updatedProfile = { ...editedProfile };
        const newUsername = editedProfile.username;
          

        if (updatedProfile.profilePic instanceof File) {
          const downloadURL = await uploadProfilePicture(updatedProfile.profilePic);
          updatedProfile.profilePic = downloadURL; // Replace File object with URL string
        }

        // Update the profile in Firestore
        const userRef = doc(db, 'users', loggedInUser.uid);
        await updateDoc(userRef, updatedProfile);

        // Update the displayName in Firebase Authentication if the username has changed
        if (newUsername !== loggedInUser.displayName) {
          await updateProfile(loggedInUser, { displayName: newUsername });

        }

        setIsEditMode(false);
      } catch (error) {
          console.error("Error updating profile: ", error);
          // Handle errors (e.g., show error message)
      }
    };

    const onProfileChange = (e) => {
      if (e.target.name === 'profilePic') {
          const file = e.target.files[0];
          if (file) {
              // You might want to handle the file upload here or set the file in state
              setEditedProfile({ ...editedProfile, profilePic: file });
          }
      } else {
          // Handle other form inputs
          setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
      }
  };




  return (
    <div className='page-container'>
        {isLoading && (<Loader />)}
        {!userFound && !isLoading && (<h3>The user {username} does not exist.</h3>)}
      <div id='userProfile'>
      {userProfile && (
            <>
                <UserCard
                    profilePic={userProfile.profilePic}
                    username={userProfile.username}
                    verified={userProfile.verified}
                />
                <div className="user-info">
                  <UserInfo
                      userProfile={userProfile}
                      isOwnProfile={isOwnProfile}
                      isEditMode={isEditMode}
                      onEditClick={() => setIsEditMode(true)}
                      onEditSubmit={handleProfileUpdate}
                      onEditCancel={() => setIsEditMode(false)}
                      editedProfile={editedProfile}
                      onProfileChange={onProfileChange}
                  />
                  {!isEditMode && (
                    <>
                      <CampGrid />
                      <ReviewGrid user={userProfile.uid} />
                    </>
                  )}
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;