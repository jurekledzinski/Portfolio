import {
  HIDE_LOADER_IMAGE_SLIDER,
  SHOW_LOADER_IMAGE_SLIDER,
} from "../actions/actionLoaderImagesSlider";

const initialState = {
  isLoadImg: false,
};

export const loaderImagesSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LOADER_IMAGE_SLIDER:
      return action.payload;
    case SHOW_LOADER_IMAGE_SLIDER:
      return action.payload;
    default:
      return state;
  }
};
