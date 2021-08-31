export const ADD_INDEX_CART = "ADD_INDEX_CART";
export const CLEAR_INDEX_CART = "CLEAR_INDEX_CART";

export const addIndexCart = (index) => ({
  type: ADD_INDEX_CART,
  payload: {
    index: index,
  },
});

export const clearIndexCart = () => ({
  type: CLEAR_INDEX_CART,
});
