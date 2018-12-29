import {createStore} from 'redux';
import reducer from './reducers/index';
import {storeState, loadState} from './localStorage';

const persistedState = loadState();
const store = createStore(
    reducer, 
    persistedState
    );

store.subscribe(() => {
    storeState(store.getState());
});

export default store;