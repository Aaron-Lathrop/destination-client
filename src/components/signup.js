import React from 'react';
import './signup.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../actions/index';

function SignUp(props) {

  const user = {};

  function onSubmit(e) {
    e.preventDefault();
    return (props.dispatch(signup(user))
      .then(props.history.push("/trips"))
      .catch(err =>
          console.error(err)
        )
      );
  }

  function handleFirstName(e) {
    user.firstName = e.target.value;
  }

  function handleUserName(e) {
    user.username = e.target.value;
  }

  function handleEmail(e) {
    user.email = e.target.value;
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

                  <button type="submit" className="btn--confirm">Sign Up</button>
                  <p>Already have an account? <Link to="/login">Log In</Link></p>
                  </fieldset>
              </form>
            
            
          </div>

    );
}

const mapStateToProps = state => ({
  username: state.username,
  name: state.firstName,
  userList: state.userList
});

export default connect(mapStateToProps)(SignUp);