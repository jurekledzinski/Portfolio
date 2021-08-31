export const ADD_SECTION = "ADD_SECTION";
export const CLEAR_SECTION = "CLEAR_SECTION";

export const addSingleSection = (ref) => ({
  type: ADD_SECTION,
  payload: ref,
});

export const clearSections = (ref) => ({
  type: CLEAR_SECTION,
  payload: ref,
});
