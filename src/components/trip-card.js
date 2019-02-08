import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import CreateTripForm from './create-trip-form';
import UpdateTripForm from './update-trip-form';
import { setTripStatus } from '../actions';

function TripCard(props) {

    //if the user isn't logged in and goes to the /trips route, then they should be redirected to the home page
    if(typeof props.trips == 'undefined') {
        return <Redirect from='/trips' to="/" />
    }

    let showTripForm = false;

    function handleView(tripId) {
        props.history.push(`/trips/${tripId}`)
    }

    function handleAddTrip(e) {
        props.dispatch(setTripStatus('add'));
    }

    function handleUpdate(tripId) {
        props.dispatch(setTripStatus('update', tripId));
    }

    function userInteractions(trip) {
        if(!props.editing) {
            return(
                <div className="btn__container">
                    <button className="btn--confirm btn--small btn--smallshadow" onClick={e => handleUpdate(trip.tripId)}>Update</button>
                </div>
            );
        }
       
    }

    const tripHeader = (
        <div className="tripcard__header">
            <p className="header__yourtrips">{props.trips.length} trips <span className="header__trips"></span> <span className="tripcard__header--addcontainer"><button className="tripcard__header--add" onClick={e => handleAddTrip(e)}>&#43;</button    > </span></p> 
        </div>
    );

    const tripsValue = () => {

        if(showTripForm) {
            return <CreateTripForm />
        }

        if(props.trips.length > 0) {
            return (
                props.trips.map((trip, index) => (
                        <li key={index} id={trip.tripId} className="tripcard">
                            <div key={trip.tripId} className="tripcard__trip">
                                <div className="tripcard__details">
                                    <p onClick={e => handleView(trip.tripId)}><span>{trip.dateList[0]}</span> to <span>{trip.dateList[trip.dateList.length-1]}</span> - {trip.destination}</p>
                                </div>
                                <div>
                                    {trip.icon ? <img src={trip.icon} alt={trip.destination} className="trip-img" /> : ""}
                                </div>
                                {userInteractions(trip)}
                            </div>
                        </li> 
                    
                ))
            );
        }

        return (
            <section className="tripcard__notrips">
                <h1>You haven't created any trips yet.</h1>
                <button onClick={e => handleAddTrip()}>Get Started</button>
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
        return <CreateTripForm />;
    } else if(props.addTrip === 'update') {
        return <UpdateTripForm tripId={props.tripId} />
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