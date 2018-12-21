import React from 'react';
import { connect } from 'react-redux'

function DailyPlanCard(props) {

    const dailyPlans = props.planCards.map((plan, index) => (
        <section>
            <div>
                <div class="daily">
                <p>{plan.date}</p>
                <p>{plan.weather}</p>
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
    ));

    return (
        <div>
            {dailyPlans}
            {/* <section>
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
            </section> */}
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const tripId = parseInt(props.match.params.tripId, 10);
    console.log(props.match.params.tripId);
    const trip = state.trips.find(item => item.tripId === tripId);
    return ({
        planCards: trip.planCards
    });
};

export default connect(mapStateToProps)(DailyPlanCard);