import { FETCHING_CONTEST_REQUEST, FETCHING_CONTEST_SUCCESS, FETCHING_CONTEST_FAILURE } from "../actions/actiontypes";

const initialState = {
    Loading: false,
    errorMessage: '',
    data: [],
    isSuccess: false
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CONTEST_REQUEST:
            return { ...state, Loading: true };
        case FETCHING_CONTEST_FAILURE:
            return { ...state, errorMessage: action.payload };
        case FETCHING_CONTEST_SUCCESS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}

export default Reducer;