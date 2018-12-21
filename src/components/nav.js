import React from 'react';
import './nav.css';
import { connect } from 'react-redux';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                    <button onClick={() => alert('plan trip clicked')}>Plan Trip</button>
                </header>
            </div>
    );
}

const mapStateToProps = (state) => ({
    test: state.test
});

export default connect(mapStateToProps)(Nav);