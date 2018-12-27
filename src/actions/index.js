//plan actions
export const SET_PLAN_CARDS = 'SET_PLAN_CARDS';
export const ADD_PLAN = 'ADD_PLAN';
export const GET_PLANS = 'GET_PLANS';
export const EDIT_PLANS = 'EDIT_PLANS';
export const CANCEL_EDIT_PLAN = 'CANCEL_EDIT_PLAN';
export const UPDATE_PLAN = 'UPDATE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';
export const GET_WEATHER = 'GET_WEATHER';

export const setPlanCards = (planCards) => ({
    type: SET_PLAN_CARDS,
    planCards
});

export const addPlan = (planCard) => ({
    type: ADD_PLAN,
    planCard
});

export const getPlans = () => ({
    type: GET_PLANS
});

export const editPlans = (planCards) => ({
    type: EDIT_PLANS,
    planCards
});

export const cancelEditPlan = (tripId, planCards) => ({
    type: CANCEL_EDIT_PLAN,
    tripId,
    planCards
});

export const updatePlan = () => ({
    type: UPDATE_PLAN
});

export const deletePlan = (plan) => ({
    type: DELETE_PLAN,
    plan
});

export const getWeather = () => ({
    type: GET_WEATHER
});


//trip actions
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

export const deleteTrip = (tripId) => ({
    type: DELETE_TRIP,
    tripId
});


//user actions
export const REQUEST = 'REQUEST';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';


export const request = () => ({
    type: REQUEST
});

export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const logOut = () => ({
    type: LOG_OUT
});

export const signup = (user) => ({
    type: SIGN_UP,
    user
});

export const logIn = (user) => ({
    type: LOG_IN,
    user
});