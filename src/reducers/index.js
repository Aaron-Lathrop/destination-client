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
    trips: [{
        userId: 12345,
        tripId: 54321,
        startDate: "1/1/2019",
        endDate: "1/3/2019",
        dateList: ["1/1/2019", "1/2/2019", "1/3/2019"],
        destination: "Tokyo, Japan",
        icon: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
        planCards: [{
            tripId: 54321,
            date: "1/1/2019",
            weather: "bloody cold",
            plans: ["01 plan 1", "01 plan 2", "01 plan 3"]
        },
        {
            tripId: 54321,
            date: "1/2/2019",
            weather: "bloody cold",
            plans: ["eat ramen", "get rental car", "wander around"]
        },
        {
            tripId: 54321,
            date: "1/3/2019",
            weather: "bloody cold",
            plans: ["eat ramen", "get rental car", "wander around"]
        }]
    },
        {
            userId: 12345,
            tripId: 67890,
            startDate: "5/1/2019",
            endDate: "5/3/2019",
            dateList: ["05/01/2019", "05/02/2019", "05/03/2019"],
            destination: "Madrid",
            icon: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
            planCards: [{
                tripId: 67890,
                date: "05/01/2019",
                weather: "one million degrees",
                plans: ["eat stuff", "get rental car", "wander around"]
            },
            {
                tripId: 67890,
                date: "05/02/2019",
                weather: "maybe rain?",
                plans: ["eat stuff", "get rental car", "wander around"]
            },
            {
                tripId: 67890,
                date: "05/03/2019",
                weather: "bloody hot",
                plans: ["eat stuff", "get rental car", "wander around"]
            }]
    }],
    userList: []
};

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case actions.SET_PLAN_CARDS:
        console.log('setplancards')
        return Object.assign({}, state, {
            planCards: [...action.planCards]
        });
        case actions.ADD_PLAN:
        console.log('addplan');
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
               // plans: action.planCard.plans
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
            
            return Object.assign({}, state, {
                editing: !state.editing
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