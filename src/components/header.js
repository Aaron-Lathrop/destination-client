import React from 'react';

import { loadAuthToken } from '../localStorage';

import './header.css'

import { connect } from 'react-redux';
// import { request } from '../actions/index';

// import SignUp from './signup';

function Header(props) {
    const auth = loadAuthToken();
    return (
        <header role="banner">
            <h1>Destino</h1>
            <h2>Simple Travel Planning</h2>
            <button onClick={() => window.location = `${auth ? "/trips" : "/signup"}`} className="btn__header">{auth ? "Trips" : "Sign Up"}</button>
        </header>
    );
}

export default connect()(Header);

