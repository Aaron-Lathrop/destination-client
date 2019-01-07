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
        <section className="sticky-footer">
            <form name="signup" onSubmit={e => onSubmit(e)}>
              <fieldset>
              <legend>Plan your DestiNation</legend>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" 
                         name="firstName" 
                         type="text" 
                         placeholder="First Name"
                         onChange={e => handleFirstName(e)} 
                         required />
                </div>

                <div>
                  <label htmlFor="username">Username</label>
                  <input id="username" 
                         name="username" 
                         type="text" 
                         placeholder="Username"
                         onChange={e => handleUserName(e)} 
                         required />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" 
                         name="email" 
                         type="email" 
                         placeholder="Email"
                         onChange={e => handleEmail(e)} 
                         required />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input id="password" 
                         name="password" 
                         type="password" 
                         placeholder="Password"
                         onChange={e => handlePassword(e)} 
                         required />
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