import React from 'react';

import './error.css';

export default function Error(props) {

    return (
        <div className="error__container">
            <p className="error__message">{props.error}</p>
        </div>
    );
}