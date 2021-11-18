import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddressBookPage, DetailPage, NotFound } from "../pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddressBookPage />} />
      <Route path="/contact/:uuid" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
