import { ADD_WAVE_CONTACT } from "../actions/actionContactWaveRefs";

const initialState = [];

export const contactWaveRefsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WAVE_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};
