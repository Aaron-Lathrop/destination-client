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
                <div className="btn__container">
                    {/* <button className="btn__tripcard" onClick={e => handleView()}>View</button> */}
                    <button className="btn__tripcard" onClick={e => handleEditing()}>Update</button>
                </div>
                    
            );
        }
        return (
            <div className="btn__container">
                <button className="btn__tripcard" onClick={e => handleEditing()}>Cancel</button>
                <TripFormUpdate tripId={trip.tripId} />
            </div>
        );
    }

    function handleGetStarted() {
        props.history.push('/newtrip');
    }

    const tripHeader = (
        <div className="tripcard__header">
            <p>Your trips <span className="header__trips">{props.trips.length}</span></p>
        </div>
    );

    const tripsValue = () => {

        if(props.trips.length > 0) {
            return (
                props.trips.map((trip, index) => (
                    <div key={trip.tripId} id={trip.tripId} className="tripcard" >
                        <li className="tripcard__trip">
                            <div className="tripcard__details">
                                <p onClick={e => handleView(trip.tripId)}><span id="start">{trip.dateList[0]}</span> to <span id="end">{trip.dateList[trip.dateList.length-1]}</span> - {trip.destination}</p>
                                
                            </div>
                            <div>
                                {trip.icon ? <img src={trip.icon} alt={trip.destination} className="trip-img" /> : ""}
                            </div>
                            {userInteractions(trip)}
                        </li> 
                    </div>
                ))
            );
        }

        return (
            <section>
                <h1>You haven't created any trips yet.</h1>
                <button className="btn__tripcard" onClick={e => handleGetStarted()}>Get Started</button>
            </section>
        );
        
    }
    
    const trips = (
        <div className="tripcard__container">
            <ul>
                {tripsValue()}
            </ul>
        </div>
        );

    return (
        <div className="sticky-footer grid grid__tripcard">
            {tripHeader}
            {trips}
        </div>
    );
}

const mapStateToProps = state => ({
    trips: state.trips,
    editing: state.editing
});

export default withRouter(connect(mapStateToProps)(TripCard));