import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './trip-form.css';

import { addTripToDatabase, setTripStatus } from '../actions';

function TripForm(props) {

  const trip = {};

  //parseDate keeps track of all the date information in an easier to read format
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

//addDays helps create the list of dates for each trip
function addDays(currentDate, days) {
  var date = new Date(currentDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

//getDates creates the list of dates to be used for each trip
function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = startDate;
  while (currentDate <= stopDate) {
      dateArray.push(parseDate(new Date (currentDate)).string );
      currentDate = addDays(currentDate, 1);
  }
  return dateArray;
}

//onSubmit builds the trip we are going to add by taking the form information, building a dateList and tripId
//and creates a blank planCard for each date in the date list so we have a default state to display
//we are then redirected back to the trips route so we can see the new trip we created
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
  
  props.dispatch(addTripToDatabase(trip, props.auth));
  handleCloseModal();
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

function handleCloseModal(e) {
  props.dispatch(setTripStatus(false));
}

  return (
      <div id="form-container" className="form__container">
      
          <form className="tripform" name="tripform" action="/trips" onSubmit={e => onSubmit(e)}>
          
          <div className="form__highlight form__highlight--blue"></div>
          
            <fieldset className="form__fieldset">
            
            <legend className="tripform__legend">Create A New Trip</legend>
            
              <div className="form__element">
                <label htmlFor="location" className="tripform__label">Destination?</label>
                <input id="location" 
                        name="location" 
                        type="text" 
                        
                        onChange={e => handleLocation(e)} 
                        required />
              </div>

              <div className="form__element">
                <label htmlFor="arrival" className="tripform__label">Date of Arrival</label>
                <input id="arrival" 
                        name="arrival" 
                        type="date" 
                        onChange={e => handleArrival(e)} 
                        required />
              </div>

              <div className="form__element">
                <label htmlFor="return" className="tripform__label">Date of Return</label>
                <input id="return" 
                        name="return" 
                        type="date" 
                        onChange={e => handleReturn(e)} 
                        required />
              </div>

              <button className="btn__form--update" type="submit">Submit</button>
              <span id="closeModal" className="form__closemodal" onClick={e => handleCloseModal(e)}>&times;</span>
            </fieldset>
          </form>
      </div>
  );
}

const mapStateToProps = state => ({
  auth: state.authToken
});

export default withRouter(connect(mapStateToProps)(TripForm));