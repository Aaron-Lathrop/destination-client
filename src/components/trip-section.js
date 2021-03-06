import React, {Component} from 'react';
import TripCard from './trip-card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setTripStatus, setEditing, getTrips } from '../actions';

import { loadAuthToken } from '../localStorage';

class TripSection extends Component {
    componentWillMount() {
        this.props.dispatch(setTripStatus(false, null));
        this.props.dispatch(setEditing(false));
    }

    componentDidMount() {
        if(this.props.auth) {
            this.props.dispatch(getTrips(this.props.auth));
        }
    }

    render() {
        return (
                <TripCard />
        );
    }
}

const mapStateToProps = state => {
    const authToken = loadAuthToken();

    return ({
        trips: state.trips,
        editing: state.editing,
        auth: authToken
    })
};

export default withRouter(connect(mapStateToProps)(TripSection));