import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/nav'
import LandingPage from './components/landing-page';
import Footer from './components/footer';
import LogIn from './components/login';
import SignUp from './components/signup';

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
                    </Switch>
                    <Footer />
                </main>
            </Router>
        );
    }
}