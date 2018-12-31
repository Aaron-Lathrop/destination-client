import React from 'react';
import './header.css'

import { connect } from 'react-redux';
// import { request } from '../actions/index';

// import SignUp from './signup';

function Header(props) {
    return (
        <header role="banner">
            <h1>DestiNation</h1>
            <h2>because so much depends upon the weather</h2>
            <button onClick={() => window.location = "/newtrip"}>Plan Trip</button>
        </header>
    );
}

export default connect()(Header);

