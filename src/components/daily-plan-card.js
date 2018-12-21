import React from 'react';

export default function DailyPlanCard(props) {
    return (
        <div>
            <section>
                <div>
                    <div class="daily">
                    <p>1/19/2018</p>
                    <p>Weather Info</p>
                    </div>
                </div>
                <div class="daily-plans">
                    <ul>
                    <li>Flight from DEN at 3:30pm</li>
                    <li>Arrive at NAR at 5:00am</li>
                    <li>Ramen and mochi for breakfast</li>
                    </ul>
                </div>
                <button>Add plan</button>
                <button>Edit</button>
            </section>

            <section>
                <div>
                    <div class="daily">
                    <p>1/20/2018</p>
                    <p>Weather Info</p>
                    </div>
                </div>
                <button>View</button>
            </section>

            <section>
                <div>
                    <div class="daily">
                    <p>1/21/2018</p>
                    <p>Weather Info</p>
                    </div>
                </div>
                <button>View</button>
            </section>
        </div>
    );
}