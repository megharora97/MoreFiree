import { FETCHING_CONTEST_REQUEST, FETCHING_CONTEST_SUCCESS, FETCHING_CONTEST_FAILURE } from "../actions/actiontypes";

export const fetchingContestRequest = () => ({
    type: FETCHING_CONTEST_REQUEST
});
export const fetchingContestSuccess = (json) => ({
    type: FETCHING_CONTEST_SUCCESS,
    payload: json
});
export const fetchingContestError = error => ({
    type: FETCHING_CONTEST_FAILURE,
    payload: error
});