import { combineReducers } from 'redux';
import planReducer from './plan-reducers'; 
import tripReducer from './trip-reducers';
import userReducer from './user-reducers';

const reducer = combineReducers({
    planReducer,
    tripReducer,
    userReducer
});

export default reducer;