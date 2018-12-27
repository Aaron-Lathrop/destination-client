import React from 'react';
import './signup.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../actions/index';

function SignUp(props) {
  const user = {};

  function onSubmit(e) {
    e.preventDefault();
    props.dispatch(signup(user));
    //window.location = "/dashboard"
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
        <section className="sticky-footer">
            <form name="signup" action="#" onSubmit={e => onSubmit(e)}>
              <fieldset>
              <legend>Plan your DestiNation</legend>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" 
                         name="firstName" 
                         type="text" 
                         placeholder="First Name"
                         onChange={e => handleFirstName(e)} />
                </div>

                <div>
                  <label htmlFor="username">Username</label>
                  <input id="username" 
                         name="username" 
                         type="text" 
                         placeholder="Username"
                         onChange={e => handleUserName(e)} />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" 
                         name="email" 
                         type="email" 
                         placeholder="Email"
                         onChange={e => handleEmail(e)} />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input id="password" 
                         name="password" 
                         type="password" 
                         placeholder="First Name"
                         onChange={e => handlePassword(e)} />
                </div>

                <button type="submit">Sign Up</button>
                </fieldset>
            </form>
          
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </section>
    );
}

const mapStateToProps = state => ({
  username: state.username,
  name: state.firstName,
  userList: state.userList
});

export default connect(mapStateToProps)(SignUp);