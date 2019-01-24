import React from 'react';
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

                <a href="https://www.linkedin.com/in/aaron-lathrop-miller/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-image" src={linkedin} alt ="linkedin-logo"/>
                </a>
    
                <a href="https://github.com/Aaron-Lathrop" target="_blank" rel="noopener noreferrer">
                    <img className="footer-image" src={github} alt="git-hub-logo" />
                </a>
    
                <a href="mailto:aaron.s.lathrop@gmail.com?Subject=Hi%20Aaron" target="_blank" rel="noopener noreferrer">
                    <img className="footer-image" src={gmail} alt="gmail-logo" />
                </a>
            </div>
        </footer>
    );
}