import {
  SHOW_LOADER_DETAILS_PROJECT,
  HIDE_LOADER_DETAILS_PROJECT,
} from "../actions/actionShowLoaderInDetailsProject";

const initialState = {
  payload: false,
};

export const showLoaderDetailsProjectsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOW_LOADER_DETAILS_PROJECT:
      return action.payload;
    case HIDE_LOADER_DETAILS_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
