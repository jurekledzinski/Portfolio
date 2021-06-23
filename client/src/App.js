import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./reduxeStore/store/store";

import "./App.scss";

import MainPage from "./components/mainpage/MainPage";

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={MainPage} />
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
