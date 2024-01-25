import { React, useState } from "react";
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  Link } from "react-router-dom";
import Button from "../components/common/button";
import './SignUp.css';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault(); 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign in is successful, now update the profile
            return updateProfile(auth.currentUser, { displayName: username });
        })
        .catch(err => {
            alert(err.message)
        });
    };

    return (
        <div className="auth__form signup">
        <h1>Sign Up</h1>
            <form className="form signup-form">
                <div className="input-container">
                    <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" />
                </div>
                <div className="input-container">
                    <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div className="input-container">
                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <div className="sml">Already have an account? <Link to="/auth/login">Login!</Link></div>
            </form>
            <Button type="submit" className="auth__btn btn" onClick={handleSignup}>Sign up</Button>
        </div>

    );
};

export default SignUp;