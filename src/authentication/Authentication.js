import React from "react";
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo_tmbr.svg';
import './Authentication.css';


function Authentication() {

    return (

        <div id="auth">
            <div className="authentication">
                <div className="auth__left">
                    <Link className="logo" to="/"><Logo /></Link>
                </div>
                <div className="auth__right">             
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Authentication