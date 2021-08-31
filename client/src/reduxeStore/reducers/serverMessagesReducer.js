import {
  ADD_ERROR_SERVER_MSG,
  ADD_SUCCESS_SERVER_MSG,
  CLEAR_SERVER_MSG,
} from "../actions/actionServerMessages";

const initialValue = {
  errorServerMsg: null,
  successServerMsg: null,
};

export const serverMessagesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_ERROR_SERVER_MSG:
      return action.payload;
    case ADD_SUCCESS_SERVER_MSG:
      return action.payload;
    case CLEAR_SERVER_MSG:
      return initialValue;
    default:
      return state;
  }
};
