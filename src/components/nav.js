import React from 'react';
import './nav.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (        
        <Router>
            <div>
                <nav role="navigation">
                    Nav
                    <Link to={`/`}>Login</Link>
                </nav>
                <header role="banner">
                    <h1>DestiNation</h1>
                    <h2>because so much depends upon the weather</h2>
                    <button onClick={() => alert('plan trip clicked')}>Plan Trip</button>
                </header>
            </div>
        </Router>
    );
}