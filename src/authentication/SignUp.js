import React, { useState } from "react";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from '../components/common/button';
import './Signup.css';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/login');
            //console.log(userCredential)
        })
        .catch((error) => {
            //console.log(error)
        });
    }

    return (
        <div className="signup">
        <h1>Sign Up</h1>
            <form onSubmit={signUp} className="form signup-form">
                <div className="input-container">
                    <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" />
                </div>
                <div className="input-container">
                    <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div className="input-container">
                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>

                <Button type="submit" className="input-submit">Sign Up</Button>
            </form>
        </div>

    );
};

export default SignUp;