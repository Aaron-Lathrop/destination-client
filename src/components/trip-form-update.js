import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './trip-form.css';

import { updateTrip, setEditing, setTripStatus } from '../actions';

function TripFormUpdate(props) {
    const trip = {};
    console.log(trip);
        console.log(props.trip);

    function parseDate(date) {
        const dateValues = {
          month: new Date(date).getMonth() + 1,
          day: new Date(date).getDate() + 1,
          year: new Date(date).getFullYear(),
          string: `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
        };
        return dateValues;
      }
    
    //Credit to John Hartsock on StackOverflow https://stackoverflow.com/questions/4413590/javascript-get-array-of-dates-between-2-dates for Date.prototype.addDays and function getDates()
    
    function addDays(currentDate, days) {
      var date = new Date(currentDate.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    
    function getDates(startDate, stopDate) {
      var dateArray = [];
      var currentDate = startDate;
      while (currentDate <= stopDate) {
          dateArray.push(parseDate(new Date (currentDate)).string );
          currentDate = addDays(currentDate, 1);
      }
      return dateArray;
    }

    function onSubmit(e) {
        e.preventDefault();
        trip.tripId = props.tripId;
        
        //If the user changed a value, then use that, otherwise default to the value before updating
        trip.destination = trip.destination !== undefined ? trip.destination : props.trip.destination;
        trip.startDate = trip.startDate !== undefined ? trip.startDate : props.trip.startDate;
        trip.endDate = trip.endDate !== undefined ? trip.endDate : props.trip.endDate;
        trip.dateList = getDates(new Date(trip.startDate), new Date(trip.endDate));
        trip.userId = props.trip.userId;
        trip.planCards = trip.dateList.map(date => {
            if(!props.trip.dateList.includes(date)) {
                return ({
                    tripId: trip.tripId,
                    date,
                    weather: "",
                    plans: []
                })

            } else {
                return props.trip.planCards.find(planCard => planCard.date === date);
            }
            
        });

        props.dispatch(updateTrip(trip));
        handleCloseModal();
    }

    function handleLocation(e) {
        trip.destination = e.target.value !== undefined ? e.target.value : props.trip.destination;
    }

    function handleFirstDay(e) {
        trip.startDate = e.target.value !== undefined ? e.target.value : props.trip.startDate;
    }

    function handleLastDay(e) {
        trip.endDate = e.target.value !== undefined ? e.target.value : props.trip.endDate;
    }

    function handleCloseModal(e) {
        props.dispatch(setTripStatus(false));
    }
    
    return (

        <div id="form-container" className="form__container">
        
            <form className="tripform" name="tripform" action="/trips" onSubmit={e => onSubmit(e)}>
            
            <div className="form__highlight"></div>
           
              <fieldset className="form__fieldset">
              
              <legend className="tripform__legend">Update Trip</legend>
              
                <div className="form__element">
                  <label htmlFor="location" className="tripform__label">Location</label>
                  <input id="location" 
                         name="location" 
                         type="text" 
                         
                         onChange={e => handleLocation(e)} 
                         required />
                </div>

                <div className="form__element">
                  <label htmlFor="arrival" className="tripform__label">First Day</label>
                  <input id="arrival" 
                         name="arrival" 
                         type="date" 
                         onChange={e => handleFirstDay(e)} 
                         required />
                </div>

                <div className="form__element">
                  <label htmlFor="return" className="tripform__label">Last Day</label>
                  <input id="return" 
                         name="return" 
                         type="date" 
                         onChange={e => handleLastDay(e)} 
                         required />
                </div>

                <button className="btn__form--update" type="submit">Update</button>
                <span id="closeModal" className="form__closemodal" onClick={e => handleCloseModal(e)}>&times;</span>
              </fieldset>
            </form>
        </div>
    );

    //     <section className="tripform">
    //         <form name="tripupdate" action="/trips" onSubmit={e => onSubmit(e)}>
    //         <fieldset>
    //         <legend className=".tripform__legend">Update trip</legend>
            
    //             <div>
    //             <label htmlFor="location" className="tripform__label">Location</label>
    //             <input id="location" 
    //                     name="location" 
    //                     type="text" 
    //                     placeholder={props.destination} 
    //                     onChange={e => handleLocation(e)}
    //                     className="tripform__input" />
    //             </div>

    //             <div>
    //             <label htmlFor="arrival" className="tripform__label">First day</label>
    //             <input id="arrival" 
    //                     name="arrival" 
    //                     type="date" 
    //                     onChange={e => handleFirstDay(e)}
    //                     className="tripform__input" />
    //             </div>

    //             <div>
    //             <label htmlFor="return" className="tripform__label">Last day</label>
    //             <input id="return" 
    //                     name="return" 
    //                     type="date" 
    //                     onChange={e => handleLastDay(e)}
    //                     className="tripform__input" />
    //             </div>

    //             <button type="submit" className="btn btn__form btn__form--update">Update</button>
    //         </fieldset>
    //         </form>
    //     </section>
    // );
}

const mapStateToProps = (state, props) => {
    const trip = state.trips.find(trip => trip.tripId === props.tripId);
    return({ 
        trip,
        destination: trip.destination,
        startDate: trip.startDate,
        endDate: trip.endDate 
    });
};

export default withRouter(connect(mapStateToProps)(TripFormUpdate));