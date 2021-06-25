import { combineReducers } from "redux";

import { isActiveHeaderWrapperReducer } from "./reducerIsActiveHeaderWrapper";
import { sectionsReducer } from "./reducerSections";
import { serverMessagesReducer } from "./serverMessagesReducer";

export const rootReducer = combineReducers({
  headerWrapperData: isActiveHeaderWrapperReducer,
  sectionsData: sectionsReducer,
  serverMsgData: serverMessagesReducer,
});
