import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TripFormUpdate from './trip-form-update';
import { setEditing } from '../actions';

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

    function handleGetStarted() {
        props.history.push('/dashboard');
    }

    const tripsValue = () => {

        if(props.trips.length > 0) {
            return (
                props.trips.map((trip, index) => (
                    <section key={trip.tripId} id={trip.tripId} className="tripcard" >
                        <div className="trip">
                            <div className="trip-description">
                                <p>Trip to {trip.destination}!</p>
                                <p><span id="start">{trip.dateList[0]}</span> to <span id="end">{trip.dateList[trip.dateList.length-1]}</span></p>
                            </div>
                            <div>
                            {trip.icon ? <img src={trip.icon} alt={trip.destination} className="trip-img" /> : ""}
                            </div>
                        </div>
                        {userInteractions(trip)}
                    </section>
                ))
            );
        }

        return (
            <section>
                <h1>You haven't created any trips yet.</h1>
                <button onClick={e => handleGetStarted()}>Get Started</button>
            </section>
        );
        
    }
    
    const trips = tripsValue();

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