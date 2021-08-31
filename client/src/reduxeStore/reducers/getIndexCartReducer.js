import {
  ADD_INDEX_CART,
  CLEAR_INDEX_CART,
} from "../actions/actionGetIndexCart";

const initialState = {
  index: null,
};

export const getIndexCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INDEX_CART:
      return action.payload;
    case CLEAR_INDEX_CART:
      return initialState;
    default:
      return state;
  }
};
