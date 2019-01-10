import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TripForm from './trip-form';
import TripFormUpdate from './trip-form-update';
import { setTripStatus } from '../actions';

function TripCard(props) {

    let showTripForm = false;

    function handleView(tripId) {
        props.history.push(`/trips/${tripId}`)
    }

    function handleGetStarted() {
        props.history.push('/newtrip');
    }

    function handleAddTrip(e) {
        props.dispatch(setTripStatus('add'));
    }

    function handleUpdate(editingStatus, tripId) {
        props.dispatch(setTripStatus('update', tripId));
    }

    function userInteractions(trip) {
        if(!props.editing) {
            return(
                <div className="btn__container">
                    <button id={trip.tripId} className="btn__tripcard" onClick={e => handleUpdate('update', trip.tripId)}>Update</button>
                </div>
            );
        }
       
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


    if(props.addTrip === 'add') {
        return <TripForm />;
    } else if(props.addTrip === 'update') {
        return <TripFormUpdate tripId={props.tripId} />
    } else {
        return (
            <div className="grid__layout--main">
                <div className="sticky-footer grid grid__card">
                    {tripHeader}
                    {trips}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    trips: state.trips,
    tripId: state.tripId,
    editing: state.editing,
    addTrip: state.addTrip
});

export default withRouter(connect(mapStateToProps)(TripCard));