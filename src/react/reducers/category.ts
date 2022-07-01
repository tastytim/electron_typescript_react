import { START_FETCHING_CATEGORIES } from "../../utils/Types";

const INITIAL_STATE = {
  loading: true,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return { ...state, loading: true };
    default:
      return state;
  }
};
