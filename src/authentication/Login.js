import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

import Button from '../components/common/button';

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth();
    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userProfile = await fetchUserProfile(userCredential.user.uid);
    
            if (userProfile && userProfile.username) {
                navigate(`/user/${userProfile.username}`);
            } else {
                // Handle the case where username is not available
                navigate('/');
            }
        } catch (error) {
            console.error("Error during login: ", error.message);
            // Handle error
        }
    };

    const fetchUserProfile = async (userId) => {
        const docRef = doc(db, "users", userId);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data(); // Returns user profile data
            } else {
                console.log("No such user profile!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user profile: ", error);
            return null;
        }
    };

    return (
        <div className="auth__form login">

            <h1>Login</h1>
            <form className="form login-form" onSubmit={handleLogin}>
                <div className="input-container user-email">
                    <input type="email" className="input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>

                <div className="input-container user-pass">
                    <input type="password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <div className="sml forgot-pass"><Link>Forgot your password?</Link></div>

                <Button type="submit" className="auth__btn btn">Sign In</Button>
            </form>

            <div className="sml">Don't have an account? <Link to="/auth/signup">Sign up!</Link></div>

        </div>
    );
};

export default Login;