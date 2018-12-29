import React from 'react';
import { connect } from 'react-redux';
import { addPlan, deletePlan, editPlans, deleteTrip, updatePlan, cancelEditPlan } from '../actions';

import './daily-plan-card.css';

function DailyPlanCard(props) {

    const plan = {};
    
    let updatePlans = props.planCards.find(planCard => planCard.date === props.currentDate);
    let deleteThisPlan = {
        hasContents: false
    };
    let deleteList = [];
    let save = false;

    function onSubmit(e) {
        e.preventDefault();
        if(!props.editing) {
            props.dispatch(addPlan(plan));
            if(document.getElementById(plan.index)) {
                document.getElementById(plan.index).value = "";
            };
        } else {
            if(save) {
                props.dispatch(deletePlan(deleteThisPlan));
                save = false;
                resetDelete();
                props.dispatch(editPlans(props.editPlanCards, props.currentDate));
            }
            props.dispatch(cancelEditPlan());
        }
        
        
        //props.dispatch(setPlanCards(props.planCards));
    }

    function handleAddChange(e, date, weather, index) {
        plan.tripId = props.trip.tripId;
        plan.plans = [...props.planCards.find(planCard => planCard.date === date).plans, e.target.value];
        plan.date = date;
        plan.weather = weather;
        plan.index = index;
    }

    function handleEditClick(date) {
        props.dispatch(editPlans(props.planCards, date));
    }

    function handleEditChange(e, index) {
        updatePlans = props.planCards.find(planCard => planCard.date === props.currentDate);
        updatePlans.plans[index] = e.target.value;
        props.dispatch(updatePlan(updatePlans.plans));
    }

    function handleDelete(e, date, index) {
        deleteList.push(e.target.id);
        deleteThisPlan.tripId = props.trip.tripId;
        deleteThisPlan.plans = deleteList;
        deleteThisPlan.date = date;
        deleteThisPlan.index = index;
        deleteThisPlan.hasContents = true;
        e.target.value = "X";
    }

    function resetDelete() {
        deleteThisPlan.tripId = null;
        deleteThisPlan.plans = null;
        deleteThisPlan.date = null;
        deleteThisPlan.index = null;
        deleteThisPlan.hasContents = false;
        deleteList = [];
    }

    function handleDeleteTrip() {
        const confirming = window.confirm("Are you sure you want to delete your trip? There's no going back once it's gone.");
        if(confirming) {
            props.dispatch(deleteTrip(props.trip.tripId));
            props.history.push('/trips');
            return alert("Trip deleted successfully.");
        }
    }

    function handleSave() {
        save = true;
    }

    function plans(date, index) {
        if(!props.editing) {
            return (
                props.planCards[index].plans.map((plan, index) => 
                    <li key={index}>
                        {plan}
                    </li>
                )
            );
        } else if(props.planCards[index].date !== props.currentDate) {
            return (
                props.planCards[index].plans.map((plan, index) => 
                    <li key={index}>
                        {plan}
                    </li>
                )
            );
        }
        return (
            props.planCards[index].plans.map((plan, index) => 
                (
                    <li key={index}>
                        <input type="text" onChange={e => handleEditChange(e, index)} value={props.plans[index]} />
                        <input id={plan} type="button" onClick={e => handleDelete(e, date, index)} value="Delete" />
                    </li>
                )
            )
        );
    }

    const dailyPlans = props.dates.map((date, index) => {
        return (
            <section key={date}>
                    <div>
                        <div className="daily">
                        <p>{date}</p>
                        <p>{props.planCards[index].weather ? props.planCards[index].weather : ""}</p>
                        </div>
                    </div>
                    <div className="daily-plans">
                        <form onSubmit={e => onSubmit(e)}>
                            <ul>
                                {plans(date, index)}
                                <li>
                                {!props.editing ? (<div><input id={index} type="text" onChange={e => handleAddChange(e, date, props.planCards[index].weather, index)} required /><input type="submit" value="Add" /></div>) : ""}
                                </li>
                            </ul>
                            {props.editing ? <div><input id="save" type="submit" value="Save" onClick={e => handleSave()} /></div> : ""}
                            {!props.editing ? <button onClick={e => handleEditClick(date)}>Edit</button> : <input id="cancel" type="submit" value="Cancel" />}
                        </form>
                    </div>
            </section>
        );

});

    return (
        <div className="sticky-footer">
            {dailyPlans}
            <button onClick={e => handleDeleteTrip()} disabled={false}>Delete Trip</button>
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
        currentDate: state.date,
        plans: state.plans,
        editing: state.editing,
        editPlanCards: state.planCards
    });
};

export default connect(mapStateToProps)(DailyPlanCard);