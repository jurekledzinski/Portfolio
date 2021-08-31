import {
  SET_HIDE_COVER_IMAGE,
  SET_SHOW_COVER_IMAGE,
} from "../actions/actionHideCoverImage";

const initialState = {
  isHideCover: false,
};

export const hideCoverImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HIDE_COVER_IMAGE:
      return action.payload;
    case SET_SHOW_COVER_IMAGE:
      return action.payload;
    default:
      return state;
  }
};
