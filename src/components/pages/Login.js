import React, { useState } from "react";
import { auth, app } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Button from '../common/button';
import '../../styles/login.css';
import FormCard from '../formCard';

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
        <div id="login">
            <div class="fw-left"></div>
            <div class="fw-right">
                <FormCard title="Login">
                    <form onSubmit={signIn} className="form login-form">
                        <div className="input-container user-email">
                            <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        </div>

                        <div className="input-container user-pass">
                            <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                        </div>

                        <Button type="submit" className="input-submit">Sign In</Button>
                    </form>

                    <div className="forgot-pass">Forgot your password?</div>

                    <div className="forgot-pass">Don't have an account yet? <Link to="/signup">Sign up</Link>!</div>
                </FormCard>
            </div>
        </div>
    );
};

export default Login;