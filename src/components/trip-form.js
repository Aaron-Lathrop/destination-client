import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './trip-form.css';

import { addTrip } from '../actions';

function TripForm(props) {

  const trip = {};

  function parseDate(date) {
    const dateValues = {
      month: new Date(date).getMonth() + 1,
      day: new Date(date).getDate() + 1,
      year: new Date(date).getFullYear(),
      string: `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
    };
    return dateValues;
  }

//Credit to John Hartsock on StackOverflow https://stackoverflow.com/questions/4413590/javascript-get-array-of-dates-between-2-dates for Date.prototype.addDays and function getDates()

function addDays(currentDate, days) {
  var date = new Date(currentDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = startDate;
  while (currentDate <= stopDate) {
      dateArray.push(parseDate(new Date (currentDate)).string );
      currentDate = addDays(currentDate, 1);
  }
  return dateArray;
}


  function onSubmit(e) {
    e.preventDefault();
    trip.dateList = getDates(new Date(trip.startDate), new Date(trip.endDate));
    trip.tripId = Math.floor(Math.random() * 9999999999999999);
    trip.planCards = trip.dateList.map(date => ({
      tripId: trip.tripId,
      date,
      weather: "",
      plans: []
    }));
    
    props.dispatch(addTrip(trip));
    props.history.push("/trips");
  }


  function handleLocation(e) {
    trip.destination = e.target.value;
  }

  function handleArrival(e) {
    trip.startDate = e.target.value;
  }

  function handleReturn(e) {
    trip.endDate = e.target.value;
  }

    return (
        <section className="sticky-footer">
            <form name="signup" action="/trips" onSubmit={e => onSubmit(e)}>
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

export default withRouter(connect()(TripForm));