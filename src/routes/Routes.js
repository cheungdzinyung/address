import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SummaryPage from "../pages/SummaryPage";
import DetailPage from "../pages/DetailPage";

const Router = ({ users }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SummaryPage users={users} />} />
        <Route path="/user/:uuid" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
