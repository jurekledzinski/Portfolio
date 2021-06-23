import { combineReducers } from "redux";

import { isActiveHeaderWrapperReducer } from "./reducerIsActiveHeaderWrapper";
import { sectionsReducer } from "./reducerSections";

export const rootReducer = combineReducers({
  headerWrapperData: isActiveHeaderWrapperReducer,
  sectionsData: sectionsReducer,
});
