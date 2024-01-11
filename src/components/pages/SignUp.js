import React, { useState } from "react";
import { auth, app } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../../styles/signup.css';

const SignUp = () => {

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
        <div id="signUp" className="container">
            <h1>Sign Up</h1>
                <form onSubmit={signUp} className="form signup-form">
                    <div className="inputContainer">
                        <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    </div>

                    <div className="inputContainer">
                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                    </div>

                    <input type="submit" className="input-submit" value="Register" />
                </form>
            </div>
    );
};

export default SignUp;