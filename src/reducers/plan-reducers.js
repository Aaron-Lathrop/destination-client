import * as actions from '../actions/plan-actions';

const initialState = {
    text: ""
};

export const GET_PLAN_CARDS = 'GET_PLAN_CARDS';
export const ADD_PLAN = 'ADD_PLAN';
export const GET_PLANS = 'GET_PLANS';
export const UPDATE_PLAN = 'UPDATE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';
export const GET_WEATHER = 'GET_WEATHER';

export const planReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.GET_PLAN_CARDS:
            console.log(actions.GET_PLAN_CARDS);
            break;
        case actions.ADD_PLAN:
            console.log(actions.ADD_PLAN);
            break;
        case actions.GET_PLANS:
            console.log(actions.GET_PLANS);
            break;
        case actions.UPDATE_PLAN:
            console.log(actions.UPDATE_PLAN);
            break;
        case actions.DELETE_PLAN:
            console.log(actions.DELETE_PLAN);
            break;
        case actions.GET_WEATHER:
            console.log(actions.GET_WEATHER);
            break;
        default:
            return state;
    }

    return state;
};