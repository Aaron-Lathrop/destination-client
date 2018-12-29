import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import { Link } from 'react-router-dom';

function TripCard(props) {

    function handleView(tripId) {
        props.history.push(`/trips/${tripId}`)
    }

    function handleUpdate(trip) {
        document.getElementById('start').innerHtml = <span id="start"><input type="date" value={new Date(trip.startDate)} /></span>
        document.getElementById('end').innerHtml = <span id="end"><input type="date" value={new Date(trip.endDate)} /></span>
    }

    function tripDates(trip) {
        
        if(props.editing) {
            return (
                <p>
                    <span id="start"><input type="date" value={new Date(trip.startDate)} /></span>
                    <span id="end"><input type="date" value={new Date(trip.endDate)} /></span>
                </p>
            );
        }
        
        
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
            <button onClick={e => handleView(trip.tripId)}>View</button>
            <button onClick={e => handleUpdate(trip)}>Update</button>
        </section>
    ));

    return (
        <div className="sticky-footer">
            {trips}
        </div>
    );
}

const mapStateToProps = state => ({
    trips: state.trips
});

export default withRouter(connect(mapStateToProps)(TripCard));