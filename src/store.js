import {createStore} from 'redux';
import reducer from './reducers/index'
//import userReducer from './reducers/user-reducers';

const store = createStore(reducer);

export default store;