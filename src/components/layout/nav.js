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
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/camping-tips">Camping Tips</Link></li>
                <li>
                    {user ?
                        <Link to="/submit-campground">Submit a Campground</Link> :
                        <></>
                    }
                </li>
            </ul>
            <div className="auth">
                {user ?
                    <><Link to={`/user/${user.username}`} className="username"><img src={user.imageUrl} alt={user.username} /></Link> | <Link className="logout__button" onClick={handleLogout}>Log Out</Link></> :
                    <>
                        <Link to="/auth/login">Login</Link> | <Link to="/auth/signup">Sign Up</Link>
                    </>
                }
            </div>
        </nav>

    );
};


export default Navigation;