import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function TripCard(props) {

    const trips = props.trips.map((trip, index) => (
        <section key={index} id={trip.tripId} >
            <div className="trip">
                <div className="trip-description">
                    <p>Trip to {trip.destination}!</p>
                    <p>{trip.startDate} to {trip.endDate}</p>
                </div>
                <div>
                    <img 
                    src={trip.icon} 
                    alt={trip.destination} className="trip-img" />
                </div>
            </div>
            <Link to={`/trips/${trip.tripId}`}>View</Link>
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

export default connect(mapStateToProps)(TripCard);