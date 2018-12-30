import * as actions from '../actions/index';

const initialState = {
    authToken: "",
    dateList: [],
    destination: "",
    error: null,
    icon: "",
    editing: false,
    loading: false,
    name: "",
    planCards: [],
    username: "",
    userID: null,
    plans: [],
    editCurrent: null,
    date: null,
    trips: [],
    userList: []
};

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case actions.SET_PLAN_CARDS:
        return Object.assign({}, state, {
            planCards: [...action.planCards]
        });
        case actions.ADD_PLAN:
            let trips = state.trips.map((trip, index) => {
                if(trip.tripId !== action.planCard.tripId) {
                    return trip;
                }
                    return Object.assign({}, trip, {
                        planCards: trip.planCards.map(card => card.date === action.planCard.date ? action.planCard : card)
                    })
            });

            return Object.assign({}, state, {
                trips
            });

        case actions.GET_PLANS:
            console.log(actions.GET_PLANS);
            break;
        case actions.EDIT_PLANS:
            let date = action.date;
            if(!Array.isArray(action.planCards)) {
                action.planCards = [action.planCards]
            }
            let plans = action.planCards.find(planCard => planCard.date === action.date).plans;

            return Object.assign({}, state, {
                editing: !state.editing,
                planCards: action.planCards,
                plans,
                date
            });

        case actions.CANCEL_EDIT_PLAN:
            
            let cancelPlanCards = state.trips.find(trip => trip.tripId === action.tripId).planCards.find(planCard => planCard.date === action.date);

            return Object.assign({}, state, {
                editing: !state.editing,
                planCards: cancelPlanCards
            });

        case actions.UPDATE_PLAN:
            return Object.assign({}, state, {
                plans: [...action.plans]
            });

        case actions.DELETE_PLAN:
            if(!action.planCard.hasContents) {
                return state;
            } else {
                let deleteTarget = state.trips.find(trip => trip.tripId === action.planCard.tripId).planCards.find(planCard => planCard.date === action.planCard.date);

                let deletePlanCard = Object.assign({}, deleteTarget, 
                    {
                        plans: deleteTarget.plans.filter(plan => !action.planCard.plans.includes(plan))
                    }
                );

                let deleteTrips = state.trips.map((trip, index) => {
                    if(trip.tripId !== action.planCard.tripId) {
                        return trip;
                    }
                    
                    return Object.assign({}, trip, {
                        planCards: trip.planCards.map(card => (
                            card.date === action.planCard.date ? deletePlanCard : card
                        ))
                    });
                });
                
                return Object.assign({}, state, {trips: deleteTrips});
            }
        case actions.GET_WEATHER:
            console.log(actions.GET_WEATHER);
            break;
        case actions.ADD_TRIP:
            return Object.assign({}, state, {
                trips: [...state.trips, action.trip]
            });
        case actions.GET_TRIPS:
            console.log(actions.GET_TRIPS);
            break;
        case actions.UPDATE_TRIP:
            const trip = state.trips.find(trip => trip.tripId === action.trip.tripId);
            
            const updatedTrip = Object.assign({}, trip, {
                destination: action.trip.destination ? action.trip.destination : trip.destination,
                startDate: action.trip.startDate ? action.trip.startDate : trip.startDate,
                endDate: action.trip.endDate ? action.trip.endDate : trip.endDate,
                dateList: action.trip.dateList ? action.trip.dateList : trip.dateList,
                planCards: action.trip.planCards ? action.trip.planCards : trip.planCards
            });

            const newTripList = state.trips.map(trip => {
                if(trip.tripId !== action.trip.tripId) {
                    return trip;
                }
                return updatedTrip;
            });

            return Object.assign({}, state, {
                editing: !state.editing,
                trips: newTripList
            });
        case actions.DELETE_TRIP:
            return Object.assign({}, state, {
                trips: state.trips.filter(trip => trip.tripId !== action.tripId)
            });
        case actions.AUTH_REQUEST:
            return Object.assign({}, state, {
                authToken: "",
                dateList: [],
                destination: "",
                error: null,
                icon: "",
                loading: false,
                name: "",
                planCards: [],
                username: "",
                userID: null,
                text: "",
                trips: [0],
                userList: []
            });
        case actions.SET_AUTH_TOKEN:
            console.log(actions.SET_AUTH_TOKEN);
            break;
        case actions.AUTH_SUCCESS:
            console.log(actions.AUTH_SUCCESS);
            break;
        case actions.LOG_OUT:
            return Object.assign({}, state, {
                authToken: "",
                dateList: [],
                destination: "",
                error: null,
                icon: "",
                loading: false,
                name: "",
                planCards: [],
                username: "",
                userID: null,
                text: "",
                trips: [0],
                userList: []
            });
        case actions.SIGN_UP: {
            const users = [...state.userList, action.user];
            return Object.assign({}, ...state.userList, {
                firstName: action.user.firstName,
                username: action.user.username,
                userList: users
            });
        }
        case actions.LOG_IN:
            console.log(actions.LOG_IN);
            break;
        case actions.REQUEST:
            return Object.assign({}, state, {
                error: null,
                loading: true
            });

        case actions.SET_EDITING:
            return Object.assign({}, state, {
                editing: !state.editing
            });
        default:
            return state;
    }

    return state;
};

export default reducer;