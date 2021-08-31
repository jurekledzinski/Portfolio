import { combineReducers } from "redux";

import { contactWaveRefsReducer } from "./contactWaveRefsReducer";
import { getIndexCartReducer } from "./getIndexCartReducer";
import { featureRefsReducer } from "./featureRefsReducer";
import { hideCoverImageReducer } from "./hideCoverImageReducer";
import { loaderImagesSliderReducer } from "./loaderImagesSliderReducer";
import { isActiveHeaderWrapperReducer } from "./reducerIsActiveHeaderWrapper";
import { sectionsReducer } from "./reducerSections";
import { serverMessagesReducer } from "./serverMessagesReducer";
import { showLoaderDetailsProjectsReducer } from "./showLoaderInDetailsProjectReducer";
import { hideShowDetailsProjectReducer } from "./hideShowDetailsProjectReducer";

export const rootReducer = combineReducers({
  contactRefsWaveData: contactWaveRefsReducer,
  featureRefsData: featureRefsReducer,
  hideCoverImageData: hideCoverImageReducer,
  indexCartData: getIndexCartReducer,
  headerWrapperData: isActiveHeaderWrapperReducer,
  loaderImageData: loaderImagesSliderReducer,
  sectionsData: sectionsReducer,
  serverMsgData: serverMessagesReducer,
  showLoaderDetailsData: showLoaderDetailsProjectsReducer,
  visibilityProjectDetailsData: hideShowDetailsProjectReducer,
});
