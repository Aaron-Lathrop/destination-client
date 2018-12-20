import * as actions from '../actions/trip-actions';

const initialState = {
    userID: "",
    dateList: [],
    destination: "",
    icon: "",
    planCards: []
};

const tripReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.ADD_TRIP:
            console.log(actions.ADD_TRIP);
            break;
        case actions.GET_TRIPS:
            console.log(actions.GET_TRIPS);
            break;
        case actions.UPDATE_TRIP:
            console.log(actions.UPDATE_TRIP);
            break;
        case actions.DELETE_TRIP:
            console.log(actions.DELETE_TRIP);
            break;
        default:
            return state;
    }

    return state;
};

export default tripReducer;