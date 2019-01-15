import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, loadAuthToken, clearAuthToken } from '../localStorage';

//plan actions
export const ADD_PLAN = 'ADD_PLAN';
export const EDIT_PLANS = 'EDIT_PLANS';
export const UPDATE_PLAN = 'UPDATE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';

export const addPlan = (planCard) => ({
    type: ADD_PLAN,
    planCard
});

export const editPlans = (planCards, date) => ({
    type: EDIT_PLANS,
    planCards,
    date
});

export const updatePlan = (plans) => ({
    type: UPDATE_PLAN,
    plans
});

export const updatePlansToDatabase = (planCard) => dispatch => {
    if(!planCard) {
        return null
    } else {
        const authToken = loadAuthToken();
        dispatch(request());
        return fetch(`${API_BASE_URL}/trips/updateplan/${planCard.tripId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
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

export const deletePlanFromDatabase = (planCard) => dispatch => {
    if(planCard.plans.length > 0){
        const authToken = loadAuthToken();
        dispatch(request());
        return fetch(`${API_BASE_URL}/trips/deleteplan/${planCard.tripId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}` 
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
    } else {
        return null;
    }
    
}


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
    const authToken = loadAuthToken();
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
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

export const getTrips = () => dispatch => {
    const authToken = loadAuthToken();
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`
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

export const updateTripToDatabase = (trip, tripId)=> dispatch => {
    const authToken = loadAuthToken();
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips/${tripId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
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
    const authToken = loadAuthToken();
    dispatch(request());
    return fetch(`${API_BASE_URL}/trips/delete/${tripId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
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
export const FAIL = 'FAIL';
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

export const setAuthToken = authorizationToken => {
    localStorage.setItem('authToken', authorizationToken);

    return ({
        type: SET_AUTH_TOKEN,
        authorizationToken
    });
};

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const fail = (error) => ({
    type: FAIL,
    error
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
        let message = err.message;
        dispatch(fail(message));
    });
};

const storeAuthInfo = (authorizationToken, user, dispatch) => {
    dispatch(setAuthToken(authorizationToken));
    dispatch(authSuccess(user));
    saveAuthToken(authorizationToken);
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
    .catch(err => {
        let message;
        if(err.code === 401) {
            message = 'Incorrect username or password';
        } else {
            message = 'Unauthorized'
        }
        dispatch(fail(message));
    });
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