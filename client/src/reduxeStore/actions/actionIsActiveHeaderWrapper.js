export const SET_TO_ACTIVE_HEADER_WRAPPER = "SET_TO_ACTIVE_HEADER_WRAPPER";
export const SET_TO_INACTIVE_HEADER_WRAPPER = "SET_TO_INACTIVE_HEADER_WRAPPER";

export const setActiveHeaderWrapper = () => ({
  type: SET_TO_ACTIVE_HEADER_WRAPPER,
  payload: true,
});

export const setInActiveHeaderWrapper = () => ({
  type: SET_TO_INACTIVE_HEADER_WRAPPER,
  payload: false,
});
