import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../actions/index';

function Signup(props) {

  const user = {};

  function onSubmit(e) {
    e.preventDefault();
    return (
      props.dispatch(signup(user))
      );
  }

  function handleUserName(e) {
    user.username = e.target.value;
  }

  function handlePassword(e) {
    user.password = e.target.value;
  }

    return (
        <div id="form-container" className="form__container"> 
                <form name="signup" className="tripform" onSubmit={e => onSubmit(e)}>
                <fieldset className="form__fieldset">
                <legend className="tripform__legend">Sign Up</legend>

                  <div className="form__element">
                    <label htmlFor="username" className="tripform__label">Username</label>
                    <input id="username" 
                          name="username" 
                          type="text" 
                          placeholder="Username"
                          onChange={e => handleUserName(e)} 
                          required />
                  </div>

                  <div className="form__element">
                    <label htmlFor="password" className="tripform__label">Password</label>
                    <input id="password" 
                          name="password" 
                          type="password" 
                          placeholder="Password"
                          onChange={e => handlePassword(e)} 
                          required />
                  </div>

                  <button type="submit" className="btn--confirm">Sign up</button>
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                  </fieldset>
              </form>
          </div>

    );
}

export default connect()(Signup);