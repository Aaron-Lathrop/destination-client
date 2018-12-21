import * as actions from '../actions/index';

const initialState = {
    authToken: "",
    error: null,
    loading: false,
    username: "",
    userID: null,
    name: "",
    dateList: [],
    destination: "",
    icon: "",
    planCards: [],
    text: "",
    tripId: [0, 1],
    userList: []
};

const reducer = (state=initialState, action) => {

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
        case actions.AUTH_REQUEST:
            console.log(actions.AUTH_REQUEST);
            break;
        case actions.SET_AUTH_TOKEN:
            console.log(actions.SET_AUTH_TOKEN);
            break;
        case actions.AUTH_SUCCESS:
            console.log(actions.AUTH_SUCCESS);
            break;
        case actions.LOG_OUT:
            console.log(actions.LOG_OUT);
            break;
        case actions.SIGN_UP: {
            return Object.assign({}, state, {
                firstName: action.user.firstName,
                username: action.user.username,
                email: action.user.email,
                password: action.user.password
            });
        }
        case actions.LOG_IN:
            console.log(actions.LOG_IN);
            break;
        case actions.REQUEST:
            console.log(actions.REQUEST);
            break;
        default:
            return state;
    }

    return state;
};

export default reducer;