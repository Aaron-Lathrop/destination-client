import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import {storeState, loadState} from './localStorage';

const persistedState = loadState();
const store = createStore(
    reducer, 
    persistedState,
    applyMiddleware(thunk)
    );
    

store.subscribe(() => {
    storeState({
        trips: store.getState().trips
    });
});

export default store;