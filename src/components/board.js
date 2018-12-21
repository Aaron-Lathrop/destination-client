import React, {Component} from 'react';
import './board.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './nav'
import FeatureSection from './feature-section';
import Footer from './footer';
import LogIn from './login';
import SignUp from './signup';
import DailyPlanCard from './daily-plan-card';

export default class Board extends Component {

    render() {
        return (
            <Router>
                <main role="main">
                    <Nav />
                    <DailyPlanCard />
                    <Switch>
                       <Route exact path="/login" component={LogIn} /> 
                       <Route exact path="/signup" component={SignUp} />
                    </Switch>
                    
                    <FeatureSection />
                    <Footer />
                </main>
            </Router>
        );
    }
}