import React from 'react';
import { connect } from 'react-redux';
import { addPlan, deletePlan, editPlans, cancelEditPlan, deleteTrip, setPlanCards } from '../actions'

import './daily-plan-card.css';

function DailyPlanCard(props) {
    const plan = {};
    
    function onSubmit(e) {
        e.preventDefault();
        !props.editing ? props.dispatch(addPlan(plan)) : props.dispatch(editPlans(props.editPlans));
        if(document.getElementById(plan.index)) {
            document.getElementById(plan.index).value = "";
        };
        props.dispatch(setPlanCards(props.planCards));
    }

    function handleAddChange(e, date, weather, index) {
        plan.tripId = props.trip.tripId;
        plan.plans = [...props.planCards.find(planCard => planCard.date === date).plans, e.target.value];
        plan.date = date;
        plan.weather = weather;
        plan.index = index;
    }

    function handleEditClick() {
        props.dispatch(editPlans(props.planCards));
    }

    // function handleCancelClick() {
    //     props.dispatch(cancelEditPlan(props.trip.tripId, props.planCards));
    // }

    function handleDelete(e, date, index) {
        plan.tripId = props.trip.tripId;
        plan.plans = e.target.id;
        plan.date = date;
        plan.index = index;
        props.dispatch(deletePlan(plan));
    }

    function handleDeleteTrip() {
        const confirming = window.confirm("Are you sure you want to delete your trip? There's no going back once it's gone.");
        if(confirming) {
            console.log(props.trip.tripId);
            props.dispatch(deleteTrip(props.trip.tripId));
            window.location.replace('/trips');
            return alert("Trip deleted successfully.");
        }
        
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
                                {!props.editing ? (props.planCards[index].plans.map((plan, index) => <li key={index}>{plan}</li>)) : (props.planCards[index].plans.map((plan, index) => <li key={index}><input type="text" onChange={e => handleAddChange(e, date, props.planCards[index].weather, index)} value={plan} /><input id={plan} type="button" onClick={e => handleDelete(e, date, index)} value="Delete" /></li>))}
                                <li>
                                {!props.editing ? (<div><input id={index} type="text" onChange={e => handleAddChange(e, date, props.planCards[index].weather, index)} required /><input type="submit" value="Add" /></div>) : ""}
                                </li>
                            </ul>
                            {props.editing ? <div><input type="submit" value="Save" /></div> : ""}
                            {!props.editing ? <button onClick={e => handleEditClick(e)}>Edit</button> : <input type="submit" value="Cancel" />}
                        </form>
                    </div>
                   
                
            </section>
            
        );
});

    return (
        <div className="sticky-footer">
            {dailyPlans}
            <button onClick={e => handleDeleteTrip()} disabled={true}>Delete Trip</button>
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
        editing: state.editing,
        editPlans: state.planCards
    });
};

export default connect(mapStateToProps)(DailyPlanCard);