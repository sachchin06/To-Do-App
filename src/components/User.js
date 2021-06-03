import React from 'react';
import logo from '../images/logo.png';

function User() {

    return (
        <div className="User">
            <div className="logo">
                <img src={logo} width="50" height="50" alt="logo" />
            </div>
            <div className="info">
                <p>Sachchin Ram</p>
                <a href="#">Logout</a>
            </div>
        </div>
    )
}

export default User