import React from 'react';
import './trip-card.css';
import { connect } from 'react-redux';

function TripCard(props) {

    const trips = props.trips.map((trip, index) => (
        <section key={index} id={trip.tripId}>
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
            <button id={trip.tripId}>View</button>
        </section>
    ));

    return (
        <div>
            {trips}
        </div>
    );
}

const mapStateToProps = state => ({
    trips: state.trips
});

export default connect(mapStateToProps)(TripCard);