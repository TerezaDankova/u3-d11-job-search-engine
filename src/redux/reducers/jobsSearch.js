import { GET_JOBS } from "../actions";

const initialState = {
      jobs: [],
    };

const jobsSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS: {
      return {
        ...state,
        jobs: [...action.payload],
      };
    }

    default:
      return state;
  }
};

export default jobsSearchReducer;