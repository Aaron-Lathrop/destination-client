import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './trip-form.css';

import { addTripToDatabase, setTripStatus, getTrips } from '../actions';
import { getDates } from '../utils/dates';

function CreateTripForm(props) {

const trip = {};

//onSubmit builds the trip we are going to add by taking the form information, building a dateList and tripId
//and creates a blank planCard for each date in the date list so we have a default state to display
//we are then redirected back to the trips route so we can see the new trip we created
function onSubmit(e) {
  e.preventDefault();
  trip.dateList = getDates(new Date(trip.startDate), new Date(trip.endDate));
  trip.planCards = trip.dateList.map(date => ({
    tripId: trip.tripId,
    date,
    weather: "",
    plans: []
  }));
  
  props.dispatch(addTripToDatabase(trip, props.auth))
  .then(() => handleCloseModal())
  .then(() => props.dispatch(getTrips(props.auth)))
  .then(() => props.history.push("/trips"))

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

function handleCloseModal() {
  props.dispatch(setTripStatus(false));
}

  return (
      <div id="form-container" className="form__container">
          <form className="tripform" name="tripform" action="/trips" onSubmit={e => onSubmit(e)}>
            <fieldset className="form__fieldset">
            <legend className="tripform__legend">Create A New Trip</legend>
              <div className="form__element">
                <label htmlFor="location" className="tripform__label">Location</label>
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
              <button className="btn--confirm" type="submit">Submit</button>
              <span id="closeModal" className="form__closemodal" onClick={e => handleCloseModal(e)}>&times;</span>
            </fieldset>
          </form>
      </div>
  );
}

const mapStateToProps = state => ({
  auth: state.authToken
});

export default withRouter(connect(mapStateToProps)(CreateTripForm));