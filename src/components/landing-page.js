import React, {Component} from 'react';

import Header from './header';
import Trips from '../assets/Trip-card.png';
import Plans from '../assets/Trip_plans_page.png';

import './landing-page.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="landingpage__container landingpage__container--lightprimary">
                <div className="feature">
                    <h2>Destino Simple Planning</h2>
                    <p>Need to plan a trip, but don't need fancy options and complicated menus? Destino let's you create trips, add the information you need for each day, and get on with your day.</p>
                </div>
                </section>
                
                <section className="landingpage__container">
                <div className="feature--withimage">
                    <div>
                        <img src={Trips} alt="Demo trip list" className="landingpage__img" />
                    </div>
                    <div className="feature__content">
                        <h2>See past and future trips</h2>
                        <p>Plan for the future or go on a trip down memory lane with our simple and straight forward trip creator.</p>
                        <p>1. Click the + icon</p>
                        <p>2. Add your trip details</p>
                        <p>3. Start adding plans for each day</p>
                        <h3>Simple and easy!</h3>
                    </div>
                </div>
                </section>

                <hr className="landingpage__hr landingpage__hr--primarycolor"></hr>

                <section className="landingpage__container">
                <div className="feature--withimage">
                    <div className="feature__content">
                    <h2>Add, edit, done</h2>
                    <p>Destino makes it easy to add, edit and delete trip details for each day. Finally, you can eliminate the excess and only see what you need every day of your trip.</p>
                    </div>
                    <div>
                        <img src={Plans} alt="Demo plan list" className="landingpage__img"  />
                    </div>
                </div>
                </section>

                <section className="landingpage__container landingpage__container--primarycolor">
                <div className="feature">
                    <h2>Sign up for free</h2>
                    <p>Sign up for your free account and start planning your next adventure!</p>
                    <button onClick={() => window.location = `${this.props.auth ? "/trips" : "/signup"}`} className="btn__header">{this.props.auth ? "Trips" : "Sign Up"}</button>
                </div>
                </section>
            </div>
            );
    }
}