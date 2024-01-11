import React, { useState } from "react";
import '../../styles/login.css';
import { auth, app } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/');
            //console.log(userCredential);
        })
        .catch((error) => {
            //console.log(error)
        });
    };

    return (
        <div id="login" className="container">
            <h1>Login</h1>
                <form onSubmit={signIn} className="form login-form">
                    <div className="inputContainer">
                        <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    </div>

                    <div className="inputContainer">
                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                    </div>

                    <input type="submit" className="input-submit" value="Sign In" />
                </form>
            </div>
    );
};

export default Login;