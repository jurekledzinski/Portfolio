export const SHOW_ERROR_FIREBASE = "SHOW_ERROR_FIREBASE";

export const displayErrorFirebase = (message) => ({
  type: SHOW_ERROR_FIREBASE,
  payload: {
    errMsg: message,
  },
});
