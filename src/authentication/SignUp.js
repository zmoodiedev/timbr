import { React, useState } from "react";
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './Signup.css';

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
        <div className="signup">
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

                <button type="submit" className="input-submit" onClick={handleSignup}>Sign Up</button>
            </form>
        </div>

    );
};

export default SignUp;