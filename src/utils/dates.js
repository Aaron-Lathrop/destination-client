  //parseDate keeps track of all the date information in an easier to read format
export function parseDate(date) {
    const dateValues = {
      month: new Date(date).getMonth() + 1,
      day: new Date(date).getDate() + 1,
      year: new Date(date).getFullYear(),
      string: `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
    };
    return dateValues;
  }

//Credit to John Hartsock on StackOverflow https://stackoverflow.com/questions/4413590/javascript-get-array-of-dates-between-2-dates for Date.prototype.addDays, refactored to function addDays(), and function getDates()

//addDays helps create the list of dates for each trip
export function addDays(currentDate, days) {
  var date = new Date(currentDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

//getDates creates the list of dates to be used for each trip
export function getDates(startDate, stopDate) {
  
    //using addDays() here corrects an issue while getting the date from the html input, namely that the date is 1 day behind what the user input
    startDate = addDays(startDate, 1);
    stopDate = addDays(stopDate, 1);

    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(parseDate(new Date (currentDate)).string );
        currentDate = addDays(currentDate, 1);
    }
    return dateArray;
}