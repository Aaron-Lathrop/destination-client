import React from 'react';
import {Link} from 'react-router-dom';
import linkedin from '../assets/linkedin-logo.png';
import github from '../assets/git-hub-logo.png';
import gmail from '../assets/gmail-logo.png';

import './footer.css'

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="copyright">
                    Copyright 2018 - Aaron Lathrop Miller
                </p>

                <Link to="https://www.linkedin.com/in/aaron-lathrop-miller/" target="_blank">
                    <img className="footer-image" src={linkedin} alt ="linkedin-logo"/>
                </Link>
    
                <Link to="https://github.com/Aaron-Lathrop" target="_blank">
                    <img className="footer-image" src={github} alt="git-hub-logo" />
                </Link>
    
                <Link to="mailto:aaron.s.lathrop@gmail.com?Subject=Hi%20Aaron" target="_blank">
                    <img className="footer-image" src={gmail} alt="gmail-logo" />
                </Link>
            </div>
        </footer>
    );
}