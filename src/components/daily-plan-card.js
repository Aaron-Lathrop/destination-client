import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { editPlans, getTrips, deleteTripFromDatabase, updatePlansToDatabase, deletePlanFromDatabase, setEditing } from '../actions';

import './daily-plan-card.css';

function DailyPlanCard(props) {

    //if no trip was found, for example an incorrect tripId was given,
    //we go back to /trips. this is to prevent errors trying to load
    //the planCards for a certain trip
    if(!(props.trip)) {
        props.history.push('/trips');
        return null;
    }

    //a trip was found and we can load the rest of the page
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
            props.dispatch(updatePlansToDatabase(plan));
            if(document.getElementById(plan.index)) {
                document.getElementById(plan.index).value = "";
            };
        } else {
            if(save) {
                if(deleteThisPlan.hasContentToDelete && deleteThisPlan.plans.length > 0) {
                    props.dispatch(deletePlanFromDatabase(deleteThisPlan));
                }
                save = false;
                resetDelete();
                props.dispatch(updatePlansToDatabase(updatePlans));
                props.dispatch(setEditing(false));
            }
        }
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

    function handleCancel() {
        props.dispatch(getTrips());
        props.dispatch(setEditing(false));
    }

    const planCardHeader = (
        <div className="plancard__header">
            <p className="plancard__header--content">{props.trip.destination} - {props.trip.dateList[0]} to {props.trip.dateList[props.trip.dateList.length-1]}</p>
            <p className="plancard__header--backlink"><Link to="/trips">{'<<< Back to trips'}</Link></p>
        </div>
    );

    function plans(date, index) {
        if(!props.editing) {
            return (
                props.planCards[index].plans.map((plan, index) => 
                    <li key={index} className="plancard__plan">
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
                            <label htmlFor={`plan-${index}`}>
                                <input type="text" name={`plan-${index}`} onChange={e => handleEditChange(e, index)} defaultValue={props.plans[index]} className="tripcard__input" />
                            </label>
                            <input id={plan} type="reset" onClick={e => handleDelete(e, date, index)} value="Delete" className="btn--small btn--smallshadow btn--delete" />
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
                        <p><b>{date}</b></p>
                        <p>{props.planCards[index].weather ? props.planCards[index].weather : ""}</p>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={e => onSubmit(e)}>
                            <ul className="planCard__ul">
                                {plans(date, index)}
                                <li>
                                {
                                    !props.editing ? 
                                    
                                    (<div>
                                        <label htmlFor='add_plan'>
                                            <input id={index} type="text" name='add_plan' onChange={e => handleAddChange(e, date, props.planCards[index].weather, index)} placeholder="Add a plan" required className="tripcard__input" aria-label='add_plan' />
                                        </label>

                                        <button type="submit" className="btn--confirm btn--small btn--smallshadow">Add</button>

                                    </div>) : ""
                                }
                                </li>
                            </ul>
                            
                            {
                                props.editing ? 

                                <button id="save" type="submit" onClick={e => handleSave(e)} className="btn--confirm btn--small btn--smallshadow">Save</button> : ""
                            }

                            {
                                !props.editing ? 

                                <button type="button" onClick={e => handleEditClick(date)} className="btn--action btn--small btn--smallshadow">Edit</button> : 

                                <button id="cancel" type="submit" onClick={e => handleCancel()
                                } className="btn--action btn--small btn--smallshadow">Cancel</button>
                            }
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
                    </ul>
                </div>
                <p className="plancard__header--backlink"><Link to="/trips">{'<<< Back to trips'}</Link></p>
                <button onClick={e => handleDeleteTrip()} className="btn--delete btn--smallshadow btn__plancard--deletetrip">Delete Trip</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const tripId = props.match.params.tripId;
    const trip = state.trips.find(item => item.tripId === tripId);
    if(!(trip)) {
        props.history.push('/trips');
        return null;
    }
    return ({
        auth: state.authToken,
        trip,
        planCards: trip.planCards,
        dates: trip.dateList,
        currentDate: state.date,
        plans: state.plans,
        editing: state.editing
    });
};

export default connect(mapStateToProps)(DailyPlanCard);