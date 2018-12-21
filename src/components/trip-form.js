import React from 'react';
import './trip-form.css';

export default function TripForm(props) {

  function onSubmit(e) {
    e.preventDefault();
    window.location = "/trips";
  }
    return (
        <section>
            <form name="signup" action="#" onSubmit={e => onSubmit(e)}>
              <fieldset>
              <legend>Create New Trip</legend>
              
                <div>
                  <label for="location">Destination?</label>
                  <input id="location" name="location" type="text" placeholder="Example: Tokyo, Japan" />
                </div>

                <div>
                  <label for="arrival">Date of Arrival</label>
                  <input id="arrival" name="arrival" type="date" />
                </div>

                <div>
                  <label for="return">Date of Return</label>
                  <input id="return" name="return" type="date" />
                </div>

                <button type="submit">Submit</button>
              </fieldset>
            </form>
        </section>
    );
}