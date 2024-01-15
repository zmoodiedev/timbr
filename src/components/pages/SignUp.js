import React, { useState } from "react";
import { auth, app } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from '../common/button';
import FormCard from '../formCard';
import '../../styles/signup.css';

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
        <div id="signUp" className="container">
            <FormCard title="Sign Up">
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
            </FormCard>
        </div>

    );
};

export default SignUp;