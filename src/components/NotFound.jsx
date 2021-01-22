import React from "react";
import { Link } from "react-router-dom";

// import Components and Images
import PageNotFound from "../images/error404.png";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container">
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
        <div className="row justify-content-center">
          <img src={PageNotFound} alt="Error 404" />
        </div>
        <h1 style={{ textAlign: "center" }}>Page not found</h1>
      </div>
      ;
    </React.Fragment>
  );
};

export default NotFound;
