
// Initial state
const initialState = {
    tripType: 'oneway',
    sourceCity: '',
    destinationCity: '',
    journeyDate: '',
    returnDate: '',
    userDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    },
};

// Reducer function
const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRIP_TYPE':
            return { ...state, tripType: action.payload };
        case 'SET_SOURCE_CITY':
            return { ...state, sourceCity: action.payload };
        case 'SET_DESTINATION_CITY':
            return { ...state, destinationCity: action.payload };
        case 'SET_JOURNEY_DATE':
            return { ...state, journeyDate: action.payload };
        case 'SET_RETURN_DATE':
            return { ...state, returnDate: action.payload };
        case 'SET_USER_DETAILS':
            return { ...state, userDetails: { ...state.userDetails, ...action.payload } };
        default:
            return state;
    }
};

export default flightReducer
