export const SET_HIDE_COVER_IMAGE = "SET_HIDE_COVER_IMAGE";
export const SET_SHOW_COVER_IMAGE = "SET_SHOW_COVER_IMAGE";

export const hideCoverImage = () => ({
  type: SET_HIDE_COVER_IMAGE,
  payload: {
    isHideCover: true,
  },
});

export const showCoverImage = () => ({
  type: SET_SHOW_COVER_IMAGE,
  payload: {
    isHideCover: false,
  },
});
