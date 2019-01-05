import React from 'react';
import {Link} from 'react-router-dom'
import './signup.css';


export default function LogIn(props) {

  function onSubmit(e) {
    e.preventDefault();
    //props.history.push("/dashboard");
  }

    return (
      <div id="form-container" className="form__container">
            <form className="tripform" name="signup" action="#" onSubmit={e => onSubmit(e)}>
            <div className="form__highlight form__highlight--auth"></div>
              <fieldset className="form__fieldset form__fieldset--auth">
              <legend className="tripform__legend">Login</legend>

                <div className="form__element">
                  <label htmlFor="username" className="tripform__label">Username</label>
                  <input id="username" name="username" type="text" placeholder="Username" />
                </div>

                <div className="form__element">
                  <label htmlFor="password" className="tripform__label">Password</label>
                  <input id="password" name="password" type="password" placeholder="Password" />
                </div>

                <button className="btn__form--update" type="submit">Log In</button>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </fieldset>
                
            </form>
          
          
        </div>
    );
}