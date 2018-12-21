import React from 'react';
import './trip-form.css';

export default function TripForm(props) {
    return (
        <section>
          <fieldset>
            <legend>Create New Trip</legend>
            <form name="signup" action="#">
              
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

            </form>
          </fieldset>
        </section>
    );
}