import React from 'react';
import './nav.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Nav(props) {
    return (        
            <div>
                <nav role="navigation">
                    <Link to={`/`}>DestiNation</Link>
                    <Link to={`/login`}>Login</Link>
                </nav>
            </div>
    );
}

const mapStateToProps = (state) => ({
    test: state.test
});

export default connect(mapStateToProps)(Nav);