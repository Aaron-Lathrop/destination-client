import { SubmissionError } from 'redux-form';

import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';


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

export const editPlans = (planCards, date) => ({
    type: EDIT_PLANS,
    planCards,
    date
});

export const cancelEditPlan = (tripId, planCards) => ({
    type: CANCEL_EDIT_PLAN,
    tripId,
    planCards
});

export const updatePlan = (plans) => ({
    type: UPDATE_PLAN,
    plans
});

export const deletePlan = (planCard) => ({
    type: DELETE_PLAN,
    planCard
});

export const getWeather = () => ({
    type: GET_WEATHER
});


//trip actions
export const ADD_TRIP = 'ADD_TRIP';
export const GET_TRIPS = 'GET_TRIPS';
export const UPDATE_TRIP = 'UPDATE_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';

export const addTrip = (trip) => ({
    type: ADD_TRIP,
    trip 
});

export const getTrips = () => ({
    type: GET_TRIPS
});

export const updateTrip = (trip) => ({
    type: UPDATE_TRIP,
    trip
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
export const SET_EDITING = 'SET_EDITING';
export const SET_TRIP_STATUS= 'SET_TRIP_STATUS';
export const STORE_STATE = 'STORE_STATE';


export const request = () => ({
    type: REQUEST
});

export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const setAuthToken = authToken => {
    localStorage.setItem('authToken', authToken);

    return ({
        type: SET_AUTH_TOKEN,
        authToken
    });
};

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const logOut = () => ({
    type: LOG_OUT
});

export const signup = user => dispatch => {
    return fetch(`${API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        console.error(err);
        // const { reason, code, message } = err;
        // if(reason === 'ValidationError') {
        //     return Promise.reject(
        //         new SubmissionError({
        //             [location]: message
        //         })
        //     );
        // }
    })
};

export const login = (username, password) => dispatch => {
    return fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(payload => {
        const { jwtToken, user } = payload;
        dispatch(setAuthToken(jwtToken));
    })
    .catch(err => console.error(err));
};

export const setEditing = (editingStatus) => ({
    type: SET_EDITING,
    editingStatus
});

export const setTripStatus = (newTrip, tripId) => ({
    type: SET_TRIP_STATUS,
    newTrip,
    tripId
});