import {
  SET_TO_ACTIVE_HEADER_WRAPPER,
  SET_TO_INACTIVE_HEADER_WRAPPER,
} from "../actions/actionIsActiveHeaderWrapper";

const initialState = false;

export const isActiveHeaderWrapperReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TO_ACTIVE_HEADER_WRAPPER:
      return action.payload;
    case SET_TO_INACTIVE_HEADER_WRAPPER:
      return action.payload;
    default:
      return state;
  }
};
