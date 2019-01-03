import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TripForm from './trip-form';
import TripFormUpdate from './trip-form-update';
import { setEditing, setTripStatus } from '../actions';

function TripCard(props) {

    let showTripForm = false;

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

    function handleAddTrip(e) {
        props.dispatch(setTripStatus(true));
    }

    const tripHeader = (
        <div className="tripcard__header">
            <p className="header__yourtrips">Your trips <span className="header__trips">{props.trips.length} </span></p>
            <p className="tripcard__header--addcontainer"><span className="tripcard__header--add" onClick={e => handleAddTrip(e)}>&#43;</span></p>
        </div>
    );

    const tripsValue = () => {

        if(showTripForm) {
            return <TripForm />
        }

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


    if(props.addTrip) {
        return <TripForm />
    } else {
        return (
            <div className="sticky-footer grid grid__tripcard">
                {tripHeader}
                {trips}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    trips: state.trips,
    editing: state.editing,
    addTrip: state.addTrip
});

export default withRouter(connect(mapStateToProps)(TripCard));