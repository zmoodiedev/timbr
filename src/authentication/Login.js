import React, { useState } from "react";
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/common/button";
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
        <div className="auth__form login">

            <h1>Login</h1>
            <form className="form login-form">
                <div className="input-container user-email">
                    <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>

                <div className="input-container user-pass">
                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <div className="sml forgot-pass"><Link>Forgot your password?</Link></div>

                <Button type="submit" className="auth__btn btn" onClick={handleLogin}>Sign In</Button>
            </form>

            <div className="sml">Don't have an account? <Link to="/auth/signup">Sign up!</Link></div>

        </div>
    );
};

export default Login;