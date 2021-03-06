import * as actions from '../actions/index';


const initialState = {
    authToken: null,
    dateList: [],
    destination: "",
    error: null,
    icon: "",
    editing: false,
    addTrip: false,
    tripId: null,
    loading: false,
    planCards: [],
    plans: [],
    date: null,
    trips: []
};

const reducer = (state=initialState, action) => {

    switch(action.type) {
        
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
                trips,
                error: null
            });

        case actions.EDIT_PLANS:
            let date = action.date;
            let plans;
            if(!Array.isArray(action.planCards)) {
                action.planCards = [action.planCards]
            }

            try {
                plans = action.planCards.find(planCard => planCard.date === action.date).plans;
            }
            catch {
            }
            
            return Object.assign({}, state, {
                editing: true,
                planCards: action.planCards,
                plans,
                editPlans: plans,
                date,
                error: null
            });

        case actions.UPDATE_PLAN:
            return Object.assign({}, state, {
                editPlans: [...action.plans]
            });

        case actions.DELETE_PLAN:
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

        //trip reducers
        case actions.ADD_TRIP:
            return Object.assign({}, state, {
                trips: [...state.trips, action.trip]
            });

        case actions.LOAD_TRIPS:
            return Object.assign({}, state, {
                trips: [...action.trips]
            })

        case actions.UPDATE_TRIP:
            const trip = state.trips.find(trip => trip.tripId === action.trip._id);
            
            const updatedTrip = Object.assign({}, trip, {
                destination: action.trip.destination ? action.trip.destination : trip.destination,
                startDate: action.trip.startDate ? action.trip.startDate : trip.startDate,
                endDate: action.trip.endDate ? action.trip.endDate : trip.endDate,
                dateList: action.trip.dateList ? action.trip.dateList : trip.dateList,
                planCards: action.trip.planCards ? action.trip.planCards : trip.planCards
            });
            
            const newTripList = state.trips.map(trip => {
                if(trip.tripId !== action.trip._id) {
                    return trip;
                }
                return updatedTrip;
            });


            return Object.assign({}, state, {
                editing: false,
                trips: newTripList
            });

        case actions.DELETE_TRIP:
            return Object.assign({}, state, {
                trips: state.trips.filter(trip => trip.tripId !== action.tripId)
            });

        //handle basic user sign up, login, and logout process    
        case actions.AUTH_REQUEST:
            return Object.assign({}, state, {
                error: null,
                loading: true,
            });

        case actions.SET_AUTH_TOKEN:
            const authToken = action.authToken;
            
            return Object.assign({}, state, {
                authToken
            });

        case actions.AUTH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                currentUser: action.currentUser
            });

        case actions.FAIL:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });

        case actions.LOG_OUT:
            return Object.assign({}, state, {
                authToken: null,
                currentUser: null,
                dateList: [],
                destination: "",
                error: null,
                icon: "",
                editing: false,
                isSaving: false,
                addTrip: false,
                tripId: null,
                loading: false,
                name: "",
                planCards: [],
                userID: null,
                plans: [],
                editedPlans: [],
                editCurrent: null,
                date: null,
                trips: []
            });

        case actions.SIGN_UP: {
            const users = [...state.userList, action.user];
            return Object.assign({}, ...state.userList, {
                firstName: action.user.firstName,
                username: action.user.username,
                userList: users
            });
        }
        
        case actions.REQUEST:
            return Object.assign({}, state, {
                error: null,
                loading: true
            });

        case actions.SUCCESS:
            return Object.assign({}, state, {
                error: null,
                loading: false
            });

        case actions.SET_EDITING:
            return Object.assign({}, state, {
                editing: action.editingStatus
            });

        case actions.SET_TRIP_STATUS:
            return Object.assign({}, state, {
                addTrip: action.newTrip,
                tripId: action.tripId
            });

        default:
            return state;
    }

};

export default reducer;