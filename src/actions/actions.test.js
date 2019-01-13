import {
    ADD_PLAN,
    EDIT_PLANS,
    UPDATE_PLAN,
    DELETE_PLAN,
    ADD_TRIP,
    LOAD_TRIPS,
    UPDATE_TRIP,
    DELETE_TRIP,
    REQUEST,
    AUTH_REQUEST,
    SET_AUTH_TOKEN,
    AUTH_SUCCESS,
    LOG_OUT,
    SIGN_UP,
    LOG_IN,
    SET_EDITING,
    addPlan,
    editPlans,
    updatePlan,
    deletePlan,
    addTrip,
    loadTrips,
    updateTrip,
    deleteTrip,
    request,
    authRequest,
    setAuthToken,
    authSuccess,
    logout,
    signup,
    login,
    setEditing
} from './index';

describe('addPlan', () => {
    it('Should return the action', () => {
        const planCard = {
            tripId: 54321,
            plans: "this is a test plan",
            date: "01/01/2019",
            weather: "super cold",
            index: 0
         };
        const action = addPlan(planCard);
        expect(action.type).toEqual(ADD_PLAN);
        expect(action.planCard).toEqual(planCard);
    });
});

describe('editPlans', () => {
    it('Should return the action', () => {
        const planCards = [{
            tripId: 54321,
            plans: "this is a test plan",
            date: "01/01/2019",
            weather: "super cold",
            index: 0
         }];
        const action = editPlans(planCards);
        expect(action.type).toEqual(EDIT_PLANS);
        expect(action.planCards).toEqual(planCards);
    });
});

describe('updatePlan', () => {
    it('Should return the action', () => {
        const action = updatePlan();
        expect(action.type).toEqual(UPDATE_PLAN);
    });
});

describe('deletePlan', () => {
    it('Should return the action', () => {
        const planCard = {
            tripId: 54321,
            plans: "this is a test plan",
            date: "01/01/2019",
            weather: "super cold",
            index: 0
         };
        const action = deletePlan(planCard);
        expect(action.type).toEqual(DELETE_PLAN);
    });
});

describe('addTrip', () => {
    it('Should return the action', () => {
        const action = addTrip();
        expect(action.type).toEqual(ADD_TRIP);
    });
});

describe('loadTrips', () => {
    it('Should return the action', () => {
        const action = loadTrips();
        expect(action.type).toEqual(LOAD_TRIPS);
    });
});

describe('updateTrip', () => {
    it('Should return the action', () => {
        const action = updateTrip();
        expect(action.type).toEqual(UPDATE_TRIP);
    });
});

describe('deleteTrip', () => {
    it('Should return the action', () => {
        const tripId = 54321;
        const action = deleteTrip(tripId);
        expect(action.type).toEqual(DELETE_TRIP);
    });
});

describe('request', () => {
    it('Should return the action', () => {
        const action = request();
        expect(action.type).toEqual(REQUEST);
    });
});

describe('authRequest', () => {
    it('Should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const action = setAuthToken();
        expect(action.type).toEqual(SET_AUTH_TOKEN);
    });
});

describe('authSuccess', () => {
    it('Should return the action', () => {
        const action = authSuccess();
        expect(action.type).toEqual(AUTH_SUCCESS);
    });
});

describe('logout', () => {
    it('Should return the action', () => {
        const action = logout();
        expect(action.type).toEqual(LOG_OUT);
    });
});

// describe('signup', () => {
//     it('Should return the action', () => {
//         const action = signup();
//         expect(action.type).toEqual(SIGN_UP);
//     });
// });

// describe('login', () => {
//     it('Should return the action', () => {
//         const action = login();
//         expect(action.type).toEqual(LOG_IN);
//     });
// });

describe('setEditing', () => {
    it('Should return the action', () => {
        const action = setEditing();
        expect(action.type).toEqual(SET_EDITING);
    });
});