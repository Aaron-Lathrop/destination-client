import React from 'react';
import { connect } from 'react-redux'

function DailyPlanCard(props) {

    // const plans = props.planCards.map((planCard, index) => (
    //     <li key={index}>{planCard}</li>
    // ));

    const dailyPlans = props.dates.map((date, index) => {
        console.log(props);

        return (
            <section>
                <div>
                    <div className="daily">
                    <p>{date}</p>
                    <p>{props.planCards[index].weather}</p>
                    </div>
                </div>
                <div className="daily-plans">
                    <ul>
                        {props.planCards[index].plans.map((plan, index) => <li key={index}>{plan}</li>)}
                    </ul>
                </div>
                <button>Add plan</button>
                <button>Edit</button>
            </section>
        );
});

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
            </section> */}
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const tripId = parseInt(props.match.params.tripId, 10);
    console.log(props.match.params.tripId);
    const trip = state.trips.find(item => item.tripId === tripId);
    return ({
        trip,
        planCards: trip.planCards,
        dates: trip.dateList
    });
};

export default connect(mapStateToProps)(DailyPlanCard);