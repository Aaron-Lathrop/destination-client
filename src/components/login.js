import React from 'react';

export default function LogIn(props) {
    return (
        <section>
            <form name="signup" action="#">
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
          
          <p>Don't have an account? <a href="/">Create one</a></p>
        </section>
    );
}