import { ADD_FEATURE, CLEAR_FEATURE } from "../actions/actionFeaturesRef";

const initialState = [];

export const featureRefsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return [...state, action.payload];
    case CLEAR_FEATURE:
      return initialState;
    default:
      return state;
  }
};
