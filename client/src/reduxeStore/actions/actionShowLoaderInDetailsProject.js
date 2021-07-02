export const SHOW_LOADER_DETAILS_PROJECT = "SHOW_LOADER_DETAILS_PROJECT";
export const HIDE_LOADER_DETAILS_PROJECT = "HIDE_LOADER_DETAILS_PROJECT";

export const showLoaderInDetails = () => ({
  type: SHOW_LOADER_DETAILS_PROJECT,
  payload: {
    isLoad: true,
  },
});

export const hideLoaderInDetails = () => ({
  type: HIDE_LOADER_DETAILS_PROJECT,
  payload: {
    isLoad: false,
  },
});
