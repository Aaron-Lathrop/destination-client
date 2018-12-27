import React from 'react';
import { connect } from 'react-redux';
import { addPlan, deletePlan, editPlans } from '../actions'

import './daily-plan-card.css';

function DailyPlanCard(props) {

    const plan = {}; 
    
    function onSubmit(e) {
        e.preventDefault();
        !props.editing ? props.dispatch(addPlan(plan)) : props.dispatch(editPlans(plan));
        if(document.getElementById("plan")) {
            document.getElementById("plan").value = "";
        };
    }

    function handleAddChange(e, date, weather) {
        plan.tripId = props.trip.tripId;
        plan.plans = e.target.value;
        plan.date = date;
        plan.weather = weather;
    }

    function handleClick(e) {
        props.dispatch(editPlans());
    }

    function handleDelete(e) {
        plan.tripId = props.trip.tripId;
        plan.plans = e.target.value;
        props.dispatch(deletePlan(plan));
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
                    <form onSubmit={e => onSubmit(e)}>
                        <ul>
                            {!props.editing ? (props.planCards[index].plans.map((plan, index) => <li key={index}>{plan}</li>)) : (props.planCards[index].plans.map((plan, index) => <li key={index}><input type="text" onChange={e => handleAddChange(e, date, props.planCards[index].weather)} value={plan} /><input type="button" onClick={e => handleDelete(e)} value="Delete" /></li>))}
                            <li>
                            {!props.editing ? (<div><input id="plan" type="text" onChange={e => handleAddChange(e, date, props.planCards[index].weather)}/><input type="submit" value="Add" /></div>) : ""}
                            </li>
                        </ul>
                        {props.editing ? <div><input type="submit" value="Save" /></div> : ""}
                    </form>
                </div>
                {!props.editing ? <button onClick={e => handleClick(e)}>Edit</button> : <button onClick={e => handleClick(e)}>Cancel</button>}
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
    const trip = state.trips.find(item => item.tripId === tripId);
    return ({
        trip,
        planCards: trip.planCards,
        dates: trip.dateList,
        plan: state.plan,
        editing: state.editing
    });
};

export default connect(mapStateToProps)(DailyPlanCard);