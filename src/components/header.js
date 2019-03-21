import React from 'react';
import { Link } from 'react-router-dom';
import { loadAuthToken } from '../localStorage';

import './header.css'

import { connect } from 'react-redux';

function Header(props) {
    const auth = loadAuthToken();
    return (
        <header role="banner">
            <div className="header__content">
                <h1>Destino</h1>
                <h2>Simple Planning for Travelers</h2>
                <Link to={`${auth ? "/trips" : "/signup"}`} className="btn btn__header" >{auth ? "Trips" : "Sign Up"}</Link>
            </div>
        </header>
    );
}

export default connect()(Header);

