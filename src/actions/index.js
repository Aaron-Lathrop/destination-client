import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../localStorage';


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

export const updatePlansToDatabase = (auth, planCard) => dispatch => {
    if(!planCard) {
        return null
    } else {
        dispatch(request());
        return fetch(`${API_BASE_URL}/trips/updateplan/${planCard.tripId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify({
            tripId: planCard.tripId,
            date: planCard.date,
            weather: planCard.weather,
            plans: planCard.plans
        })
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(update => {
            dispatch(addPlan(update.updatedPlanCard))
        })
        .then(res => {
            dispatch(success())
        })
        .catch(err => console.error(err))
        }
}

export const deletePlan = planCard => ({
    type: DELETE_PLAN,
    planCard
});

export const deletePlanFromDatabase = (auth, planCard) => dispatch => {
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips/deleteplan/${planCard.tripId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${auth}` 
        },
        body: JSON.stringify({
            hasContentToDelete: planCard.hasContentToDelete,
            date: planCard.date,
            index: planCard.index,
            plans: planCard.plans,
            tripId: planCard.tripId
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(update => {
        dispatch(deletePlan(update.originalRequest))
    })
    .then(res => {
        dispatch(success())
    })
    .catch(err => console.error(err))
}

export const getWeather = () => ({
    type: GET_WEATHER
});


//trip actions
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_TRIP_TO_DATABASE = 'ADD_TRIP_TO_DATABASE';
export const GET_TRIPS = 'GET_TRIPS';
export const LOAD_TRIPS = 'LOAD_TRIPS';
export const UPDATE_TRIP = 'UPDATE_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';

export const addTrip = trip => ({
    type: ADD_TRIP,
    trip
});

export const addTripToDatabase = (trip, auth) => dispatch => {
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify({trip})
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
        dispatch(addTrip(trip));
    })
    .then(res => {
        dispatch(success());
    })
    .catch(err => console.error(err))
}

export const getTrips = (auth) => dispatch => {
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${auth}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
        dispatch(loadTrips(res))
    })
    .then(res => {
        dispatch(success())
    })
    .catch(err => console.error(err))
};

export const loadTrips = trips => ({
    type: LOAD_TRIPS,
    trips
});

export const updateTrip = (trip) => ({
    type: UPDATE_TRIP,
    trip
});

export const updateTripToDatabase = (auth, trip, tripId)=> dispatch => {
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips/${tripId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify({
            destination: trip.destination,
            startDate: trip.startDate,
            endDate: trip.endDate,
            dateList: trip.dateList,
            planCards: trip.planCards
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(updatedTrip => dispatch(updateTrip(updatedTrip.trip)))
    .then(res => dispatch(success()))
    .catch(err => console.error(err))
}

export const deleteTrip = (tripId) => ({
    type: DELETE_TRIP,
    tripId
});

export const deleteTripFromDatabase = (auth, tripId) => dispatch => {
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips/${tripId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify({
            id: tripId
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
        dispatch(deleteTrip(tripId));
    })
    .then(res => {
        dispatch(success());
    })
    .catch(err => console.error(err));
}


//user actions
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
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

export const success = () => ({
    type: SUCCESS
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

export const logout = () => {
    clearAuthToken();
    return ({
        type: LOG_OUT
    })
};

export const signup = user => dispatch => {
    dispatch(authRequest());
    return fetch(`${API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(userAuth => {
        dispatch(login(user.username, user.password));
    })
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

const storeAuthInfo = (authToken, user, dispatch) => {
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(user));
    saveAuthToken(authToken);
}

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
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
        storeAuthInfo(jwtToken, user, dispatch);
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