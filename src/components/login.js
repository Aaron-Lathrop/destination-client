import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, fail } from '../actions/index';

import './signup.css';

function Login(props) {

  const user = {};

  function onSubmit(e) {
    e.preventDefault();
    return (
      props.dispatch(login(user.username, user.password))
      );
  }

  function handleUsername(e) {
    user.username = e.target.value;
  }

  function handlePassword(e) {
    user.password = e.target.value;
  }

    return (
      <div id="form-container" className="form__container">
            <form className="tripform" name="login" onSubmit={e => onSubmit(e)}>
            <div className="form__highlight form__highlight--auth"></div>
              <fieldset className="form__fieldset form__fieldset--auth">
              <legend className="tripform__legend">Login</legend>

                <div className="form__element">
                  <label htmlFor="username" className="tripform__label">Username</label>
                  <input id="username" 
                         name="username" 
                         type="text" 
                         placeholder="Admin007"
                         
                         onChange={e => handleUsername(e)} />
                </div>

                <div className="form__element">
                  <label htmlFor="password" className="tripform__label">Password</label>
                  <input id="password" 
                         name="password" 
                         type="password" 
                         placeholder="demo123456"
                         
                         onChange={e =>handlePassword(e)} />
                </div>
                <p><b>Demo account:</b> <br /> Username: Admin007 <br /> Password: demo123456</p>
                <button className="btn--confirm" type="submit">Login</button>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </fieldset>
                
            </form>
          
          
        </div>
    );
}

export default connect()(Login)