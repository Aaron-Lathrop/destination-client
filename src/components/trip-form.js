import React from 'react';
import './trip-form.css';

export default function TripForm(props) {

  const trip = {};

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
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(parseDate(new Date (currentDate)).string );
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

console.log(getDates(new Date("2018/12/28"), new Date("2019/01/12")));

  function onSubmit(e) {
    e.preventDefault();
    window.location = "/trips";
  }

  function handleLocation(e) {
    trip.location = e.target.value;
    console.log(trip);
  }

  function handleArrival(e) {
    trip.arrival = e.target.value;
    console.log(trip);
    console.log(`${new Date(e.target.value).getMonth() + 1}/${new Date(e.target.value).getDate() + 1}/${new Date(e.target.value).getFullYear()}`);
    console.log(e.target.value instanceof Date, " expect false");
  }

  function handleReturn(e) {
    trip.return = e.target.value;
    console.log(trip);
  }

    return (
        <section className="sticky-footer">
            <form name="signup" action="#" onSubmit={e => onSubmit(e)}>
              <fieldset>
              <legend>Create A New Trip</legend>
              
                <div>
                  <label htmlFor="location">Destination?</label>
                  <input id="location" 
                         name="location" 
                         type="text" 
                         placeholder="Example: Tokyo, Japan" 
                         onChange={e => handleLocation(e)} 
                         required />
                </div>

                <div>
                  <label htmlFor="arrival">Date of Arrival</label>
                  <input id="arrival" 
                         name="arrival" 
                         type="date" 
                         onChange={e => handleArrival(e)} 
                         required />
                </div>

                <div>
                  <label htmlFor="return">Date of Return</label>
                  <input id="return" 
                         name="return" 
                         type="date" 
                         onChange={e => handleReturn(e)} 
                         required />
                </div>

                <button type="submit">Submit</button>
              </fieldset>
            </form>
        </section>
    );
}