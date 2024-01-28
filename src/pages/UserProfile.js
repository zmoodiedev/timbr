import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { db } from '../firebaseConfig';
import UserCard from '../components/layout/userCard';
import UserInfo from '../components/userInfo';
import CampGrid from '../components/campGrid';
import ReviewGrid from '../components/reviewGrid';
import Loader from '../components/common/loader';


import '../styles/userProfile.css';

const UserProfile = () => {
  const { username } = useParams();
  const auth = getAuth();
  const loggedInUser = auth.currentUser;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
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
    
    useEffect(() => {
      if (userProfile && isEditMode) {
          setEditedProfile(userProfile);
      }
    }, [userProfile, isEditMode]);

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

        // Update the local state and exit edit mode
        setUserProfile(updatedProfile);
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
      <>
        {isLoading && (<Loader />)}
        {!userFound && !isLoading && (<h3>The user {username} does not exist.</h3>)}
      </>
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