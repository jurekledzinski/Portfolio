import { combineReducers } from "redux";

import { getIndexCartReducer } from "./getIndexCartReducer";
import { featureRefsReducer } from "./featureRefsReducer";
import { contactWaveRefsReducer } from "./contactWaveRefsReducer";
import { isActiveHeaderWrapperReducer } from "./reducerIsActiveHeaderWrapper";
import { sectionsReducer } from "./reducerSections";
import { serverMessagesReducer } from "./serverMessagesReducer";
import { hideShowDetailsProjectReducer } from "./hideShowDetailsProjectReducer";

export const rootReducer = combineReducers({
  contactRefsWaveData: contactWaveRefsReducer,
  featureRefsData: featureRefsReducer,
  indexCartData: getIndexCartReducer,
  headerWrapperData: isActiveHeaderWrapperReducer,
  sectionsData: sectionsReducer,
  serverMsgData: serverMessagesReducer,
  visibilityProjectDetailsData: hideShowDetailsProjectReducer,
});
