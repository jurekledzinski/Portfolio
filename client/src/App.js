import React, { Fragment, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./reduxeStore/store/store";

import "./App.scss";

const MainPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/mainpage/MainPage")), 3000);
  });
});

import PageNotFound from "./components/others/Pagenotfound";
import LoadingIcon from "./components/others/LoaderPage";

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<LoadingIcon />}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
