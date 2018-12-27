//plan actions
export const GET_PLAN_CARDS = 'GET_PLAN_CARDS';
export const ADD_PLAN = 'ADD_PLAN';
export const GET_PLANS = 'GET_PLANS';
export const EDIT_PLANS = 'EDIT_PLANS';
export const UPDATE_PLAN = 'UPDATE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';
export const GET_WEATHER = 'GET_WEATHER';

export const getPlanCards = () => ({
    type: GET_PLAN_CARDS
});

export const addPlan = (plan) => ({
    type: ADD_PLAN,
    plan
});

export const getPlans = () => ({
    type: GET_PLANS
});

export const editPlans = (plan) => ({
    type: EDIT_PLANS,
    plan
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

export const deleteTrip = () => ({
    type: DELETE_TRIP
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