import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddressBookPage, ContactDetailsPage, NotFoundPage } from "../pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddressBookPage />} />
      <Route path="/contact/:uuid" element={<ContactDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
