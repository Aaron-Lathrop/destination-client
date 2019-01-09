import React from 'react';
import './nav.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Nav(props) {

    //nav bar links when not logged in
    const noAuth = [
        {
            path: '/',
            text: 'Destino'
        },
        {
            path: '/login',
            text: 'Login'
        },
        {
            path: '/signup',
            text: 'Sign Up'
        }
    ];

    //nav bar links when logged in
    const auth = [
        {
            path: '/',
            text: 'Destino'
        },
        // {
        //     text: `Welcome ${props.user.firstName}`
        // },
        {
            path: '/logout',
            text: 'Log Out'
        },
        {
            path: '/trips',
            text: 'Trips'
        }
    ];

    //determine whether or not a user is logged in
    let navbar;
    
    if(!props.user) {
        navbar = noAuth;
    } else {
        navbar = auth;
    }

    //build list of links in JSX to display
    const navLinks = navbar.map(link => {
        if(link.path) {
            return <Link key={link.path} to={link.path}>{link.text}</Link>
        } else {
            return <Link key={link.text} to={'#'}>{link.text}</Link>
        }
    });

    return (        
            <div className="sticky nav__content">
                <nav role="navigation">
                    {navLinks}
                </nav>
            </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.currentUser
});

export default connect(mapStateToProps)(Nav);