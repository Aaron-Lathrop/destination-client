import React, {Component} from 'react';
import TripForm from './trip-form';
import TripCard from './trip-card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class TripSection extends Component {
    render() {
        return (
                <TripCard />
        );
    }
}

const mapStateToProps = state => ({
    trips: state.trips,
    editing: state.editing
});

export default withRouter(connect(mapStateToProps)(TripSection));