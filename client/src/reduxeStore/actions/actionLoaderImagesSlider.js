export const HIDE_LOADER_IMAGE_SLIDER = "HIDE_LOADER_IMAGE_SLIDER";
export const SHOW_LOADER_IMAGE_SLIDER = "SHOW_LOADER_IMAGE_SLIDER";

export const hideImageLoaderSlider = () => ({
  type: HIDE_LOADER_IMAGE_SLIDER,
  payload: {
    isLoadImg: true,
  },
});

export const showImageLoaderSlider = () => ({
  type: SHOW_LOADER_IMAGE_SLIDER,
  payload: {
    isLoadImg: false,
  },
});
