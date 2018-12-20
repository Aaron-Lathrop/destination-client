import * as actions from '../actions/user-actions';

const initialState = {
    authToken: "",
    error: null,
    loading: false,
    user: null,
    userID: null
};

export const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.REQUEST:
            console.log(actions.REQUEST);
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
        case actions.SIGN_UP:
            console.log(actions.SIGN_UP);
            break;
        case actions.LOG_IN:
            console.log(actions.LOG_IN);
            break;
        default:
            return state;
    }

    return state;
};