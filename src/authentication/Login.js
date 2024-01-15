import React, { useState } from "react";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Button from '../components/common/button';
import './Login.css';

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
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={signIn} className="form login-form">
                <div className="input-container user-email">
                    <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>

                <div className="input-container user-pass">
                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>

                <Button type="submit" className="input-submit">Sign In</Button>
            </form>

            <div className="forgot-pass"><Link>Forgot your password?</Link></div>
        </div>
    );
};

export default Login;