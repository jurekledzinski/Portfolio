export const OPEN_HIDE_MOBILE_MENU = "OPEN_HIDE_MOBILE_MENU";
export const HIDE_MOBILE_MENU = "HIDE_MOBILE_MENU";

export const openHideMobileMenu = (condition) => ({
  type: OPEN_HIDE_MOBILE_MENU,
  payload: condition,
});

export const hideMobileMenu = () => ({
  type: HIDE_MOBILE_MENU,
});
