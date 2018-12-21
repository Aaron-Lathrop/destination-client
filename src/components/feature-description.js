import React from 'react';

export default function FeatureDescription(props) {
    return (
        <div>
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