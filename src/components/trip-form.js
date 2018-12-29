import React from 'react';
import './trip-form.css';

export default function TripForm(props) {

  const trip = {};

  function onSubmit(e) {
    e.preventDefault();
    window.location = "/trips";
  }

  function handleLocation(e) {
    trip.location = e.target.value;
    console.log(trip);
  }

  function handleArrival(e) {
    trip.arrival = e.target.value;
    console.log(trip);
    console.log(new Date(e.target.value));
  }

  function handleReturn(e) {
    trip.return = e.target.value;
    console.log(trip);
  }

    return (
        <section className="sticky-footer">
            <form name="signup" action="#" onSubmit={e => onSubmit(e)}>
              <fieldset>
              <legend>Create A New Trip</legend>
              
                <div>
                  <label htmlFor="location">Destination?</label>
                  <input id="location" 
                         name="location" 
                         type="text" 
                         placeholder="Example: Tokyo, Japan" 
                         onChange={e => handleLocation(e)} 
                         required />
                </div>

                <div>
                  <label htmlFor="arrival">Date of Arrival</label>
                  <input id="arrival" 
                         name="arrival" 
                         type="date" 
                         onChange={e => handleArrival(e)} 
                         required />
                </div>

                <div>
                  <label htmlFor="return">Date of Return</label>
                  <input id="return" 
                         name="return" 
                         type="date" 
                         onChange={e => handleReturn(e)} 
                         required />
                </div>

                <button type="submit">Submit</button>
              </fieldset>
            </form>
        </section>
    );
}