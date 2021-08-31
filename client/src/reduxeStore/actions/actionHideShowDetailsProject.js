export const SHOW_DETAILS_PROJECT = "SHOW_DETAILS_PROJECT";
export const HIDE_DETAILS_PROJECT = "HIDE_DETAILS_PROJECT";

export const showDetailsProject = () => ({
  type: SHOW_DETAILS_PROJECT,
  payload: {
    isVisible: true,
  },
});

export const hideDetailsProject = () => ({
  type: HIDE_DETAILS_PROJECT,
  payload: {
    isVisible: false,
  },
});
