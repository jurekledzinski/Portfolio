import {
  OPEN_HIDE_MOBILE_MENU,
  HIDE_MOBILE_MENU,
} from "../actions/actionOpenHideMobileMenu";

const initialState = false;

export const openHideMenuMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_HIDE_MOBILE_MENU:
      return action.payload;
    case HIDE_MOBILE_MENU:
      return initialState;
    default:
      return state;
  }
};
