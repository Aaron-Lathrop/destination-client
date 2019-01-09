import React from 'react';
import { connect } from 'react-redux';
import { addPlan, deletePlan, editPlans, deleteTripFromDatabase, updatePlansToDatabase, deletePlanFromDatabase, cancelEditPlan, setEditing } from '../actions';

import './daily-plan-card.css';

function DailyPlanCard(props) {

    const plan = {};
    
    let updatePlans;
    let deleteThisPlan = {
        hasContentToDelete: false
    };
    let deleteList = [];
    let save = false;


    function onSubmit(e) {
        e.preventDefault();
        if(!props.editing) {
            props.dispatch(updatePlansToDatabase(props.auth, plan));
            if(document.getElementById(plan.index)) {
                document.getElementById(plan.index).value = "";
            };
        } else {
            if(save) {
                if(deleteThisPlan.hasContentToDelete) {
                    props.dispatch(deletePlanFromDatabase(props.auth, deleteThisPlan));
                }
                save = false;
                resetDelete();
                props.dispatch(updatePlansToDatabase(props.auth, updatePlans));
                //props.dispatch(editPlans(updatePlans, props.currentDate));
                
            }
            console.log('props.plans', props.plans);
            console.log('props.planCards', props.planCards);
            console.log('props.trip', props.trip);
            
            // props.dispatch(editPlans(props.plans, props.currentDate));
            // props.dispatch(cancelEditPlan(props.trip.tripId, props.plans));
        }
        props.dispatch(setEditing(false));
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
        // props.dispatch(updatePlan(updatePlans.plans));
    }

    function handleDelete(e, date, index) {
        if(e.target.value === "Undo") {
            e.target.value = "Delete";
            deleteThisPlan.plans = deleteThisPlan.plans.filter(plan => plan !== e.target.id);
        } else {
            deleteList.push(e.target.id);
            deleteThisPlan.tripId = props.trip.tripId;
            deleteThisPlan.plans = deleteList;
            deleteThisPlan.date = date;
            deleteThisPlan.index = index;
            deleteThisPlan.hasContentToDelete = true;
            e.target.value = "Undo";
        }
    }

    function resetDelete() {
        deleteThisPlan.tripId = null;
        deleteThisPlan.plans = null;
        deleteThisPlan.date = null;
        deleteThisPlan.index = null;
        deleteThisPlan.hasContentToDelete = false;
        deleteList = [];
    }

    function handleDeleteTrip() {
        const confirming = window.confirm("Are you sure you want to delete your trip? There's no going back once it's gone.");
        if(confirming) {
            props.dispatch(deleteTripFromDatabase(props.auth, props.trip.tripId));
            props.history.push('/trips');
            return alert("Trip deleted successfully.");
        }
    }

    function handleSave() {
        save = true;
    }

    const planCardHeader = (
        <div className="plancard__header">
            <p>{props.trip.destination} - {props.trip.dateList[0]} to {props.trip.dateList[props.trip.dateList.length-1]}</p>
        </div>
    );

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
        } else if(props.editing){
            return (
                props.plans.map((plan, index) => 
                    (
                        <li key={index}>
                            <input type="text" name={`plan-${index}`} onChange={e => handleEditChange(e, index)} defaultValue={props.plans[index]} className="tripcard__input" />
                            <input id={plan} type="reset" onClick={e => handleDelete(e, date, index)} value="Delete" className="btn__tripcard btn__tripcard--red" />
                        </li>
                    )
                )
            );
        }
    }

    const dailyPlans = props.dates.map((date, index) => {
        return (
            <li key={date} id={date}>
                    <div>
                        <div>
                        <p>{date}</p>
                        <p>{props.planCards[index].weather ? props.planCards[index].weather : ""}</p>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={e => onSubmit(e)}>
                            <ul>
                                {plans(date, index)}
                                <li>
                                {!props.editing ? (<div><input id={index} type="text" onChange={e => handleAddChange(e, date, props.planCards[index].weather, index)} required className="tripcard__input" /><input type="submit" value="Add" className="btn__tripcard btn__tripcard--blue"/></div>) : ""}
                                </li>
                            </ul>
                            {props.editing ? <input id="save" type="submit" value="Save" onClick={e => handleSave(e)} className="btn__tripcard" /> : ""}
                            {!props.editing ? <button onClick={e => handleEditClick(date)} className="btn__tripcard">Edit</button> : <input id="cancel" type="submit" value="Cancel" className="btn__tripcard" />}
                        </form>
                    </div>
            </li>
        );

});

    return (
        <div className="grid__layout--main">
            <div className="grid grid__card sticky-footer">
                {planCardHeader}
                <div className="plancard__container">
                    <ul>
                        {dailyPlans}
                        <button onClick={e => handleDeleteTrip()} className="btn__tripcard--red">Delete Trip</button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const tripId = props.match.params.tripId;
    const trip = state.trips.find(item => item.tripId === tripId);
    return ({
        user: state.currentUser,
        auth: state.authToken,
        trip,
        planCards: trip.planCards,
        dates: trip.dateList,
        currentDate: state.date,
        plans: state.plans,
        editing: state.editing,
        editPlanCards: state.planCards,
    });
};

export default connect(mapStateToProps)(DailyPlanCard);