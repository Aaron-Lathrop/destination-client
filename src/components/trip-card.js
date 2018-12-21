import React from 'react';

export default function TripCard(props) {
    return (
        <div>
            <section>
            <div class="trip">
                <div class="trip-description">
                <p>Trip to Tokyo!</p>
                <p>1/19/2019 - 1/27/2019</p>
                </div>
                <div class="trip-img">
                picture
                </div>
            </div>
            <button>View</button>
            </section>

            <section>
            <div class="trip">
                <div class="trip-description">
                <p>Trip to Madrid!</p>
                <p>4/4/2019 - 4/27/2019</p>
                </div>
                <div class="trip-img">
                picture
                </div>
            </div>
                <button>View</button>
            </section>
        </div>
    );
}