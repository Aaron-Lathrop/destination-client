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