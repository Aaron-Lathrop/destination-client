import reducer from './index'
import * as actions from '../actions/index';

describe('Reducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.authToken).toEqual(null);
        expect(state.dateList).toEqual([]);
        expect(state.destination).toEqual("");
        expect(state.error).toEqual(null);
        expect(state.icon).toEqual("");
        expect(state.editing).toEqual(false);
        expect(state.addTrip).toEqual(false);
        expect(state.tripId).toEqual(null);
        expect(state.loading).toEqual(false);
        expect(state.planCards).toEqual([]);
        expect(state.plans).toEqual([]);
        expect(state.date).toEqual(null);
        expect(state.trips).toEqual([]);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
});