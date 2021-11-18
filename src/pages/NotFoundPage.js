import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <div>
    <br />
    <h2>
      Oops... <br />
      There is nothing here!
    </h2>
    <Link to="/">Click to go back home!</Link>
  </div>
);
