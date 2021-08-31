export const ADD_FEATURE = "ADD_FEATURE";
export const CLEAR_FEATURE = "CLEAR_FEATURE";

export const addFeatureAbout = (ref) => ({
  type: ADD_FEATURE,
  payload: ref,
});

export const clearFeatureAbout = () => ({
  type: CLEAR_FEATURE,
});
