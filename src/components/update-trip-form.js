import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './trip-form.css';

import { updateTripToDatabase, setEditing, setTripStatus } from '../actions';
import { getDates } from '../utils/dates';

function TripFormUpdate(props) {
    const trip = {};

    function onSubmit(e) {
        e.preventDefault();
        trip.tripId = props.tripId;

        //If the user changed a value, then use that, otherwise default to the value before updating
        trip.destination = trip.destination !== undefined ? trip.destination : props.trip.destination;
        trip.startDate = trip.startDate !== undefined ? trip.startDate : props.trip.startDate;
        trip.endDate = trip.endDate !== undefined ? trip.endDate : props.trip.endDate;
        trip.dateList = getDates(new Date(trip.startDate), new Date(trip.endDate));
        trip.userId = props.trip.userId;
        trip.planCards = trip.dateList.map(date => {
            if(!props.trip.dateList.includes(date)) {
                return ({
                    tripId: trip.tripId,
                    date,
                    weather: "",
                    plans: []
                })

            } else {
                return props.trip.planCards.find(planCard => planCard.date === date);
            }
            
        });

        props.dispatch(updateTripToDatabase(trip, trip.tripId));
        handleCloseModal();
    }

    function handleLocation(e) {
        trip.destination = e.target.value !== undefined ? e.target.value : props.trip.destination;
    }

    function handleFirstDay(e) {
        trip.startDate = e.target.value !== undefined ? e.target.value : props.trip.startDate;
    }

    function handleLastDay(e) {
        trip.endDate = e.target.value !== undefined ? e.target.value : props.trip.endDate;
    }

    function handleCloseModal(e) {
        props.dispatch(setTripStatus(false));
        props.dispatch(setEditing(false));
    }
    
    return (
        <div id="form-container" className="form__container">
        
            <form className="tripform" name="tripform" action="/trips" onSubmit={e => onSubmit(e)}>
           
              <fieldset className="form__fieldset">
              
              <legend className="tripform__legend">Update Trip</legend>
              
                <div className="form__element">
                  <label htmlFor="location" className="tripform__label">Location</label>
                  <input id="location" 
                         name="location" 
                         type="text" 
                         
                         onChange={e => handleLocation(e)} 
                          />
                </div>

                <div className="form__element">
                  <label htmlFor="arrival" className="tripform__label">First Day</label>
                  <input id="arrival" 
                         name="arrival" 
                         type="date" 
                         onChange={e => handleFirstDay(e)} 
                          />
                </div>

                <div className="form__element">
                  <label htmlFor="return" className="tripform__label">Last Day</label>
                  <input id="return" 
                         name="return" 
                         type="date" 
                         onChange={e => handleLastDay(e)} />
                </div>

                <button className="btn--confirm" type="submit">Update</button>
                <span id="closeModal" className="form__closemodal" onClick={e => handleCloseModal(e)}>&times;</span>
              </fieldset>
            </form>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const trip = state.trips.find(trip => trip.tripId === props.tripId);
    return({ 
        auth: state.authToken,
        trip,
        destination: trip.destination,
        startDate: trip.startDate,
        endDate: trip.endDate 
    });
};

export default withRouter(connect(mapStateToProps)(TripFormUpdate));