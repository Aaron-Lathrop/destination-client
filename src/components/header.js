import React from 'react';

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
                <button onClick={() => window.location = `${auth ? "/trips" : "/signup"}`} className="btn__header">{auth ? "Trips" : "Sign Up"}</button>
            </div>
        </header>
    );
}

export default connect()(Header);

