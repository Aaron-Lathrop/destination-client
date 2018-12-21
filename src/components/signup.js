import React from 'react';
import './signup.css';

import {Link} from 'react-router-dom';

export default function SignUp(props) {
    return (
        <section>
            <form name="signup" action="#">
              <fieldset>
              <legend>Plan your DestiNation</legend>
                <div>
                  <label for="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="First Name" />
                </div>

                <div>
                  <label for="username">Username</label>
                  <input id="username" name="username" type="text" placeholder="Username" />
                </div>

                <div>
                  <label for="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Email" />
                </div>

                <div>
                  <label for="password">Password</label>
                  <input id="password" name="password" type="password" placeholder="First Name" />
                </div>

                <button type="submit">Sign Up</button>
                </fieldset>
            </form>
          
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </section>
    );
}