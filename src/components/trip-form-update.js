import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './trip-form.css';

import { updateTrip } from '../actions';

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
    
    return (
        <section className="sticky-footer">
            <form name="signup" action="/trips" onSubmit={e => onSubmit(e)}>
            <fieldset>
            <legend>Update trip</legend>
            
                <div>
                <label htmlFor="location">Location</label>
                <input id="location" 
                        name="location" 
                        type="text" 
                        placeholder={props.destination} 
                        onChange={e => handleLocation(e)} />
                </div>

                <div>
                <label htmlFor="arrival">First day</label>
                <input id="arrival" 
                        name="arrival" 
                        type="date" 
                        onChange={e => handleFirstDay(e)} />
                </div>

                <div>
                <label htmlFor="return">Last day</label>
                <input id="return" 
                        name="return" 
                        type="date" 
                        onChange={e => handleLastDay(e)} />
                </div>

                <button type="submit">Submit</button>
            </fieldset>
            </form>
        </section>
    );
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