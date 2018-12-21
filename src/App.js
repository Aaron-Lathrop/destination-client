import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/nav'
import LandingPage from './components/landing-page';
import Footer from './components/footer';
import LogIn from './components/login';
import SignUp from './components/signup';
import TripSection from './components/trip-section';
import TripCard from './components/trip-card';

export default class App extends Component {

    render() {
        return (
            <Router>
                <main role="main">
                    <Nav />
                    <Switch>
                      <Route exact path="/" component={LandingPage} />
                      <Route exact path="/login" component={LogIn} /> 
                      <Route exact path="/signup" component={SignUp} />
                      <Route exact path="/dashboard" component={TripSection} />
                      <Route exact path="/trips" component={TripCard} />
                    </Switch>
                    <Footer />
                </main>
            </Router>
        );
    }
}