export const ADD_PLAN = 'ADD_PLAN';
export const GET_PLANS = 'GET_PLANS';
export const UPDATE_PLAN = 'UPDATE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';
export const GET_WEATHER = 'GET_WEATHER';

export const addPlan = () => ({
    type: ADD_PLAN
});

export const getPlans = () => ({
    type: GET_PLANS
});

export const updatePlan = () => ({
    type: UPDATE_PLAN
});

export const deletePlan = () => ({
    type: DELETE_PLAN
});

export const getWeather = () => ({
    type: GET_WEATHER
});