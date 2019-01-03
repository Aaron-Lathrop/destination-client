import React, {Component} from 'react';
import TripForm from './trip-form';
import TripCard from './trip-card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setTripStatus, setEditing } from '../actions';

class TripSection extends Component {
    componentWillMount() {
        this.props.dispatch(setTripStatus(false, null));
        this.props.dispatch(setEditing(false));

    }

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