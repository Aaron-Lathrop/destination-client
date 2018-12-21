import React from 'react';

export default function FeatureHighlight(props) {
    const features = props.features.map((feature, index) => (
        <div key={index} className="feature">
            {props.features[index].img} img
            <p>{props.features[index].text}</p>
        </div>
    ));
    
    return (
        <section>
            <div className="feature-section">
                {features}
            </div>
        </section>
    );
}