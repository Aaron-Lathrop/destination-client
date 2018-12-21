import React from 'react';
import './nav.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {request} from '../actions/index';

export function Nav(props) {
    return (        
            <div>
                <nav role="navigation">
                    {props.test}
                    <Link to={`/login`}>Login</Link>
                </nav>
                <header role="banner">
                    <h1>DestiNation</h1>
                    <h2>because so much depends upon the weather</h2>
                    <button onClick={() => props.dispatch(request())}>Plan Trip</button>
                </header>
            </div>
    );
}

const mapStateToProps = (state) => ({
    test: state.test
});

export default connect(mapStateToProps)(Nav);