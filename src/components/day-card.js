// import React from 'react';
// import { connect } from 'react-redux';

// import { addPlan, deletePlan, editPlans, deleteTrip, setPlanCards, updatePlan, cancelEditPlan } from '../actions';


// function DayCard(props) {

//     //const plan = {};
    
//     let updatePlans = props.planCards.find(planCard => planCard.date === props.currentDate);
//     let deleteThisPlan = {
//         hasContents: false
//     };
//     let deleteList = [];
//    // let save = false;

//     function handleEditChange(e, index) {
//         updatePlans = props.planCards.find(planCard => planCard.date === props.currentDate);
//         updatePlans.plans[index] = e.target.value;
//         props.dispatch(updatePlan(updatePlans.plans));
//     }

//     function handleDelete(e, date, index) {
//         deleteList.push(e.target.id);
//         deleteThisPlan.tripId = props.trip.tripId;
//         deleteThisPlan.plans = deleteList;
//         deleteThisPlan.date = date;
//         deleteThisPlan.index = index;
//         deleteThisPlan.hasContents = true;
//         e.target.value = "X";
//     }

//     if(!props.editing) {
//         return (
//             props.planCards[props.index].plans.map((plan, index) => 
//                 <li key={props.date}>
//                     {plan}
//                 </li>
//             )
//         );
//     } else if(props.planCards[props.index].date !== props.currentDate) {
//         return (
//             props.planCards[props.index].plans.map((plan, index) => 
//                 <li key={props.date}>
//                     {plan}
//                 </li>
//             )
//         );
//     }
//     return (
//         props.planCards[props.index].plans.map((plan, index) => 
//             (
//                 <li key={props.date}>
//                     <input type="text" onChange={e => handleEditChange(e, index)} value={props.plans[index]} />
//                     <input id={plan} type="button" onClick={e => handleDelete(e, props.date, index)} value="Delete" />
//                 </li>
//             )
//         )
//     );
// }

// const mapStateToProps = (state, props) => {
//     const tripId = parseInt(props.match.params.tripId, 10);
//     const trip = state.trips.find(item => item.tripId === tripId);
//     return ({
//         trip,
//         planCards: trip.planCards,
//         dates: trip.dateList,
//         currentDate: state.date,
//         plans: state.plans,
//         editing: state.editing,
//         editPlanCards: state.planCards
//     });
// };

// export default connect(mapStateToProps)(DayCard);