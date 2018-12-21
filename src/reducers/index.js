import * as planActions from '../actions/plan-actions';
import * as tripActions from '../actions/trip-actions';
import * as userActions from '../actions/user-actions';

const initialState = {
    authToken: "",
    error: null,
    loading: false,
    user: null,
    userID: null,
    dateList: [],
    destination: "",
    icon: "",
    planCards: [],
    text: "",
    test: "test"
};

const planReducer = (state=initialState, action) => {

    switch(action.type) {
        case planActions.GET_PLAN_CARDS:
            console.log(planActions.GET_PLAN_CARDS);
            break;
        case planActions.ADD_PLAN:
            console.log(planActions.ADD_PLAN);
            break;
        case planActions.GET_PLANS:
            console.log(planActions.GET_PLANS);
            break;
        case planActions.UPDATE_PLAN:
            console.log(planActions.UPDATE_PLAN);
            break;
        case planActions.DELETE_PLAN:
            console.log(planActions.DELETE_PLAN);
            break;
        case planActions.GET_WEATHER:
            console.log(planActions.GET_WEATHER);
            break;
        case tripActions.ADD_TRIP:
            console.log(tripActions.ADD_TRIP);
            break;
        case tripActions.GET_TRIPS:
            console.log(tripActions.GET_TRIPS);
            break;
        case tripActions.UPDATE_TRIP:
            console.log(tripActions.UPDATE_TRIP);
            break;
        case tripActions.DELETE_TRIP:
            console.log(tripActions.DELETE_TRIP);
            break;
        case userActions.AUTH_REQUEST:
            console.log(userActions.AUTH_REQUEST);
            break;
        case userActions.SET_AUTH_TOKEN:
            console.log(userActions.SET_AUTH_TOKEN);
            break;
        case userActions.AUTH_SUCCESS:
            console.log(userActions.AUTH_SUCCESS);
            break;
        case userActions.LOG_OUT:
            console.log(userActions.LOG_OUT);
            break;
        case userActions.SIGN_UP:
            console.log(userActions.SIGN_UP);
            break;
        case userActions.LOG_IN:
            console.log(userActions.LOG_IN);
            break;
        default:
            return state;
    }

    return state;
};

export default planReducer;