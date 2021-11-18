import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <div>
    <h1>Oops...nothing here</h1>
    <Link to="/">Back to Home</Link>
  </div>
);
