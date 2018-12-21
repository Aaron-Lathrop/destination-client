import React, {Component} from 'react';
import './feature-section.css';

import FeatureHighlight from './feature-highlight';
import FeatureDescription from './feature-description';

export default class FeatureSection extends Component {
    

    render() {
        return (
            <div>
                <FeatureHighlight features={features} />
                <FeatureDescription />
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