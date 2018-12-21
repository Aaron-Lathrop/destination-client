import React, {Component} from 'react';
import './board.css';
import Nav from './nav'
import FeatureSection from './feature-section';
import Footer from './footer';
import TripSection from './trip-section';

export default class Board extends Component {
    render() {
        return (
            <main role="main">
                <Nav />
                <TripSection />
                <FeatureSection />
                <Footer />
            </main>
        );
    }
}