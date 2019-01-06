import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/nav';
import LandingPage from './components/landing-page';
import Footer from './components/footer';
import Login from './components/login';
import Logout from './components/logout';
import SignUp from './components/signup';
import TripForm from './components/trip-form';
// import TripCard from './components/trip-card';
import TripSection from './components/trip-section';
import DailyPlanCard from './components/daily-plan-card';

class App extends Component {

    render() {
        return (
            <Router>
                <main role="main">
                    <Nav />
                    <Switch>
                        {!(this.props.user) ? <Redirect from="/trips" to="/" /> : null}
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} /> 
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/newtrip" component={TripForm} />
                        <Route exact path="/trips" component={TripSection} />
                        <Route exact path="/trips/:tripId" component={DailyPlanCard} />
                        
                    </Switch>
                    <Footer />
                </main>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
    user: state.currentUser
}); 

export default connect(mapStateToProps)(App);