import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebaseConfig';

import Button from "../components/common/button";
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Create User
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            await updateProfile(user, { displayName: username });

            // Create a user document in user collection
            const userProfileRef = doc(db, 'users', user.uid);
            await setDoc(userProfileRef, {
                uid: user.uid,
                email: user.email,
                username: username,
                name: "",
                location: "",
                bio: "",
                favoriteCampgrounds: [],
                favoriteActivities: [],
                verified: false,
                reviews: []
            });
            
            
            // Navigate to the profile page
            navigate(`/user/${username}`);
        } catch (error) {
            console.error("Error during signup: ", error.message);
            // Handle errors (e.g., show error message to user)
        }
    };


    return (
        <div className="auth__form signup">
        <h1>Sign Up</h1>
            <form className="form signup-form" onSubmit={handleSignup}>
                <div className="input-container">
                    <input type="text" className="input" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" />
                </div>
                <div className="input-container">
                    <input type="email" className="input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div className="input-container">
                    <input type="password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <div className="sml">Already have an account? <Link to="/auth/login">Login!</Link></div>
            
                <Button type="submit" className="auth__btn btn">Sign up</Button>
            </form>
        </div>

    );
};

export default SignUp;