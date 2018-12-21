import React from 'react';
import {Link} from 'react-router-dom'

export default function LogIn(props) {

  function onSubmit(e) {
    e.preventDefault();
    window.location = "/dashboard"
  }

    return (
        <section>
            <form name="signup" action="#" onSubmit={e => onSubmit(e)}>
              <fieldset>
              <legend>Plan your DestiNation</legend>

                <div>
                  <label for="username">Username</label>
                  <input id="username" name="username" type="text" placeholder="Username" />
                </div>

                <div>
                  <label for="password">Password</label>
                  <input id="password" name="password" type="password" placeholder="First Name" />
                </div>

                <button type="submit">Sign Up</button>
                </fieldset>
            </form>
          
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </section>
    );
}