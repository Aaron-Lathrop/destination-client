import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TripFormUpdate from './trip-form-update';
import { setEditing } from '../actions';
//import { Link } from 'react-router-dom';

function TripCard(props) {

    function handleView(tripId) {
        props.history.push(`/trips/${tripId}`)
    }

    function handleEditing(trip) {
        props.dispatch(setEditing());
    }

    function userInteractions(trip) {
        if(!props.editing) {
            return(
                <div>
                    <button onClick={e => handleView(trip.tripId)}>View</button>
                    <button onClick={e => handleEditing()}>Update</button>
                </div>
            );
        }
        return (
            <div>
                <button onClick={e => handleEditing()}>Cancel</button>
                <TripFormUpdate tripId={trip.tripId} />
            </div>
        );
    }

    const trips = props.trips.map((trip, index) => (
        <section key={trip.tripId} id={trip.tripId} >
            <div className="trip">
                <div className="trip-description">
                    <p>Trip to {trip.destination}!</p>
                    <p><span id="start">{trip.startDate}</span> to <span id="end">{trip.endDate}</span></p>
                </div>
                <div>
                    <img 
                    src={trip.icon} 
                    alt={trip.destination} className="trip-img" />
                </div>
            </div>
            {userInteractions(trip)}
            {/* <button onClick={e => handleView(trip.tripId)}>View</button>
            <button onClick={e => handleEditing()}>Update</button> */}
        </section>
    ));

    return (
        <div className="sticky-footer">
            {trips}
        </div>
    );
}

const mapStateToProps = state => ({
    trips: state.trips,
    editing: state.editing
});

export default withRouter(connect(mapStateToProps)(TripCard));