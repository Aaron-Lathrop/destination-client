import React from 'react';
import { connect } from 'react-redux';
import { addPlan } from '../actions'

import './daily-plan-card.css';

function DailyPlanCard(props) {
    console.log(props.trip);
    console.log(props.planCards);
    console.log(props.dates);
    console.log(props.plan);

    const plan = {}; 
    
    function onSubmit(e) {
        e.preventDefault();
        props.dispatch(addPlan(plan));
        document.getElementById("plan").value = "";
    }

    function handleChange(e, date, weather) {
        plan.tripId = props.trip.tripId;
        plan.plans = e.target.value;
        plan.date = date;
        plan.weather = weather;
    }

    const dailyPlans = props.dates.map((date, index) => {
        return (
            <section key={index}>
                <div>
                    <div className="daily">
                    <p>{date}</p>
                    <p>{props.planCards[index].weather}</p>
                    </div>
                </div>
                <div className="daily-plans">
                    <ul>
                        {props.planCards[index].plans.map((plan, index) => <li key={index}>{plan}</li>)}
                        <li>
                            <form onSubmit={e => onSubmit(e)}>
                                <input id="plan" type="text" onChange={e => handleChange(e, date, props.planCards[index].weather)}/>
                                <input type="submit" value="Add" />
                            </form>
                        </li>
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
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const tripId = parseInt(props.match.params.tripId, 10);
    console.log(state);
    const trip = state.trips.find(item => item.tripId === tripId);
    return ({
        trip,
        planCards: trip.planCards,
        dates: trip.dateList,
        plan: state.plan
    });
};

export default connect(mapStateToProps)(DailyPlanCard);