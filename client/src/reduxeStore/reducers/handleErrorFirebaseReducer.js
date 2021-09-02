import { SHOW_ERROR_FIREBASE } from "../actions/actionHandleErrorFirebase";

const initialState = null;

export const handleErrorFirebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR_FIREBASE:
      return action.payload.errMsg;
    default:
      return state;
  }
};
