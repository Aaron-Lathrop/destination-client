export const ADD_TRIP = 'ADD_TRIP';
export const GET_TRIPS = 'GET_TRIPS';
export const UPDATE_TRIP = 'UPDATE_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';

export const addTrip = () => ({
    type: ADD_TRIP 
});

export const getTrips = () => ({
    type: GET_TRIPS
});

export const updateTrip = () => ({
    type: UPDATE_TRIP
});

export const deleteTrip = () => ({
    type: DELETE_TRIP
});