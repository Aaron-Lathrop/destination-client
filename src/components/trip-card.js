import React from 'react';
import { connect } from 'react-redux';

function TripCard(props) {

    const trips = props.ids.map((id, index) => (
        <section key={index}>
            <div class="trip">
                <div class="trip-description">
                    <p>Trip to Tokyo!</p>
                    <p>1/19/2019 - 1/27/2019</p>
                </div>
                <div class="trip-img">
                    picture
                </div>
            </div>
            <button id={id}>View</button>
        </section>
    ));

    return (
        <div>
            {trips}
        </div>
    );
}

const mapStateToProps = state => ({
    ids: state.tripId
});

export default connect(mapStateToProps)(TripCard);