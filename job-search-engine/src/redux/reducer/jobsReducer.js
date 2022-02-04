import { initialState } from "../store";
import {
  GET_JOB_OFFERS,
  GET_JOB_OFFERS_ERROR,
  GET_LOADING_SPINNER,
} from "../actions";

const jobsReducer = (state = initialState.jobOffers, action) => {
  switch (action.type) {
    case GET_JOB_OFFERS:
      return {
        ...state,
        jobs: action.payload,
      };
    case GET_JOB_OFFERS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case GET_LOADING_SPINNER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
