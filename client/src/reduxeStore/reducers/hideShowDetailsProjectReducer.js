import {
  SHOW_DETAILS_PROJECT,
  HIDE_DETAILS_PROJECT,
} from "../actions/actionHideShowDetailsProject";

const initialState = {
  isVisible: false,
};

export const hideShowDetailsProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DETAILS_PROJECT:
      return action.payload;
    case HIDE_DETAILS_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
