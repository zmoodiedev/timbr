import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../utilities/UserSlice';
import { getAuth, signOut } from "firebase/auth";
import '../../styles/nav.css';


function Navigation({profilePic}) {

    const user = useSelector((state) => state.data.user.user);
    const dispatch = useDispatch();

    const auth = getAuth();
    
    const handleLogout = () => {
        dispatch(loginUser());
        signOut(auth);
    }

    return (
        <nav className="navbar container">
            <div className="logo">
                <Link to="/">tmbr</Link>
            </div>
            <ul className="main-nav">
                <li><Link to="/explore" className="nav-item">Explore</Link></li>
                <li><Link to="/camping-tips" className="nav-item">Camping Tips</Link></li>
                <li>
                    {user ?
                        <Link to="/submit-campground">Submit a Campground</Link> :
                        <></>
                    }
                </li>
            </ul>
            <div className="auth">
                {user ?
                    <>
                       <Link className="logout__button" onClick={handleLogout}>Log Out</Link>
                        <nav id="userNav">
                            <ul>
                                <li><Link to={`/user/${user.username}`} className="username"><img src={user.imageUrl} alt={user.username} /></Link></li>
                            </ul>
                        </nav>
                    </>
                          :
                    <>
                        <Link to="/auth/login" className="login-btn">Login</Link> <Link to="/auth/signup" className="register-btn">Register</Link>
                    </>
                }
            </div>
        </nav>

    );
};


export default Navigation;