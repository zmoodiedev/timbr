import React, { useState } from "react";
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/');
            console.log(userCredential);
        })
        .catch((error) => {
            alert(error)
        });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form className="form login-form">
                <div className="input-container user-email">
                    <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>

                <div className="input-container user-pass">
                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>

                <button type="submit" className="input-submit" onClick={handleLogin}>Sign In</button>
            </form>

            <div className="forgot-pass"><Link>Forgot your password?</Link></div>
        </div>
    );
};

export default Login;