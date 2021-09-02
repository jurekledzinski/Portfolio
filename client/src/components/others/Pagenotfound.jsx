import React from "react";
import { useHistory } from "react-router";

import "./PagenotFound.scss";

const PageNotFound = () => {
  const history = useHistory();

  const handleRedirectHomePage = () => {
    history.push("/");
  };

  return (
    <div className="page-not-found">
      <h1 className="page-not-found__text">Oops!</h1>
      <h2 className="page-not-found__title">Page not found</h2>
      <button className="page-not-found__btn" onClick={handleRedirectHomePage}>
        Back to homepage
      </button>
    </div>
  );
};

export default PageNotFound;
