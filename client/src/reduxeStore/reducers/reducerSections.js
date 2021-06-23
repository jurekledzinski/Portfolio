import { ADD_SECTION, CLEAR_SECTION } from "../actions/actionSections";

const initialState = [];

export const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SECTION:
      if (state.length <= 3) {
        return [...state, action.payload];
      }
    case CLEAR_SECTION:
      return initialState;
    default:
      return initialState;
  }
};
