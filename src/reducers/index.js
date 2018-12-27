import * as actions from '../actions/index';

const initialState = {
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
    plan: null,
    trips: [{
        userId: 12345,
        tripId: 54321,
        startDate: "01/01/2019",
        endDate: "01/20/2019",
        dateList: ["01/01/2019", "01/02/2019", "01/03/2019"],
        destination: "Tokyo, Japan",
        icon: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
        planCards: [{
            date: "01/01/2019",
            weather: "bloody cold",
            plans: ["01 plan 1", "01 plan 2", "01 plan 3"]
        },
        {
            date: "01/02/2019",
            weather: "bloody cold",
            plans: ["eat ramen", "get rental car", "wander around"]
        },
        {
            date: "01/03/2019",
            weather: "bloody cold",
            plans: ["eat ramen", "get rental car", "wander around"]
        }]
    },
        {
            userId: 12345,
            tripId: 67890,
            startDate: "05/01/2019",
            endDate: "05/03/2019",
            dateList: ["05/01/2019", "05/02/2019", "05/03/2019"],
            destination: "Madrid",
            icon: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
            planCards: [{
                date: "05/01/2019",
                weather: "one million degrees",
                plans: ["eat stuff", "get rental car", "wander around"]
            },
            {
                date: "05/02/2019",
                weather: "maybe rain?",
                plans: ["eat stuff", "get rental car", "wander around"]
            },
            {
                date: "05/01/2019",
                weather: "bloody hot",
                plans: ["eat stuff", "get rental car", "wander around"]
            }]
    }],
    userList: []
};

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case actions.GET_PLAN_CARDS:
            console.log(actions.GET_PLAN_CARDS);
            break;
        case actions.ADD_PLAN:
            let target = state.trips.find(trip => trip.tripId === action.plan.tripId).planCards.find(planCard => planCard.date === action.plan.date);

            let planCard = Object.assign({}, target, 
                {
                    plans: [   
                        ...target.plans,
                        action.plan.plans
                    ]
                }
            );

            let trips = state.trips.map((trip, index) => {
                if(trip.tripId !== action.plan.tripId) {
                    return trip;
                }
                
                return Object.assign({}, trip, {
                    planCards: trip.planCards.map(card => (
                        card.date === action.plan.date ? planCard : card
                    ))
                });
            });
            
            return Object.assign({}, state, {trips});

        case actions.GET_PLANS:
            console.log(actions.GET_PLANS);
            break;
        case actions.UPDATE_PLAN:
            console.log(actions.UPDATE_PLAN);
            break;
        case actions.DELETE_PLAN:
            console.log(actions.DELETE_PLAN);
            break;
        case actions.GET_WEATHER:
            console.log(actions.GET_WEATHER);
            break;
        case actions.ADD_TRIP:
            console.log(actions.ADD_TRIP);
            break;
        case actions.GET_TRIPS:
            console.log(actions.GET_TRIPS);
            break;
        case actions.UPDATE_TRIP:
            console.log(actions.UPDATE_TRIP);
            break;
        case actions.DELETE_TRIP:
            console.log(actions.DELETE_TRIP);
            break;
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
        default:
            return state;
    }

    return state;
};

export default reducer;