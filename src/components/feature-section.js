import React, {Component} from 'react';
import './feature-section.css';

//import FeatureHighlight from './feature-highlight';
//import FeatureDescription from './feature-description';

export default class FeatureSection extends Component {
    

    render() {
        return (
        <div>
            <section>
            <div class="feature-section">
                <div class="feature">
                Feature 1 img
                <p>Short description</p>
                </div>
                <div class="feature">
                Feature 2 img
                <p>Short description</p>
                </div>
                <div class="feature">
                Feature 3 img
                <p>Short description</p>
                </div>
            </div>
            </section>
            
            <section>
            <h2>Choose a destination</h2>
            <div class="feature-section">
                
                <div class="feature">Feature 1 img</div>
                <p>Awesome feature description</p>
            </div>
            
            </section>

            <section>
            <h2>See daily weather</h2>
            <div class="feature-section">
                
                <div class="feature flex-start">Feature 2 img</div>
                <p>Live weather updates for each place you'll be visiting.</p>
            </div>
            
            </section>

            <section>
            <h2>Make daily plans</h2>
            <div class="feature-section">
                <div class="feature">Feature 3 img</div>
                <p>Add activities, flights, hotel information, or anything really.</p>
            </div>
            </section>
        </div>
        );
    }
}

const features = [{
    img: "Feature 1",
    text: "Short description"
},{
    img: "Feature 2",
    text: "Short description"
},{
    img: "Feature 3",
    text: "Short description"
}];