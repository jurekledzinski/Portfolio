export const ADD_ERROR_SERVER_MSG = "ADD_ERROR_SERVER_MSG";
export const ADD_SUCCESS_SERVER_MSG = "ADD_SUCCESS_SERVER_MSG";
export const CLEAR_SERVER_MSG = "CLEAR_SERVER_MSG";

export const addServerErrorMessage = (message) => ({
  type: ADD_ERROR_SERVER_MSG,
  payload: {
    errorServerMsg: message,
  },
});

export const addServerSuccessMessage = (message, where) => ({
  type: ADD_SUCCESS_SERVER_MSG,
  payload: {
    successServerMsg: message,
  },
});

export const clearServerMessage = () => ({
  type: CLEAR_SERVER_MSG,
});
