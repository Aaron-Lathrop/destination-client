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
import TripSection from './components/trip-section';
import DailyPlanCard from './components/daily-plan-card';

import { loadAuthToken } from './localStorage';

class App extends Component {

    render() {
        const auth = loadAuthToken();
        
        return (
            <Router>
                <main role="main">
                <div className="image__container"></div>
                    <Nav />
                    <Switch>
                        {!(auth) ? <Redirect from="/trips" to="/" /> : null}
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