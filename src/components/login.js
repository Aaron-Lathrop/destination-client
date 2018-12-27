import React from 'react';
import {Link} from 'react-router-dom'
import './signup.css';


export default function LogIn(props) {

  function onSubmit(e) {
    e.preventDefault();
    window.location = "/dashboard";
  }

    return (
        <section className="sticky-footer">
            <form name="signup" action="#" onSubmit={e => onSubmit(e)}>
              <fieldset>
              <legend>Plan your DestiNation</legend>

                <div>
                  <label htmlFor="username">Username</label>
                  <input id="username" name="username" type="text" placeholder="Username" />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" type="password" placeholder="First Name" />
                </div>

                <button type="submit">Log In</button>
                </fieldset>
            </form>
          
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </section>
    );
}