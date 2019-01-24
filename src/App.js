import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/nav';
import Error from './components/error';
import LandingPage from './components/landing-page';
import Footer from './components/footer';
import Login from './components/login';
import Logout from './components/logout';
import Signup from './components/signup';
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
                    {(this.props.error) ? <Error error={this.props.error} /> : ""}
                    <Switch>
                        {!(auth) ? <Redirect from="/trips" to="/" /> : null}
                        {(auth) ? <Redirect from="/login" to="/trips" /> : null}
                        {(auth) ? <Redirect from="/signup" to="/trips" /> : null}
                        <Route exact path="/" component={LandingPage} auth={auth} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} /> 
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/trips" component={TripSection} />
                        <Route exact path="/trips/:tripId" component={DailyPlanCard} />
                        <Redirect from="/:unknown" to="/" />
                    </Switch>
                    <Footer />
                </main>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
    user: state.currentUser,
    error: state.error
}); 

export default connect(mapStateToProps)(App);