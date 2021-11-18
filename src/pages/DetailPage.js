import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContactDetails } from "../components";

export const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ContactDetails />
      <Button title="back" onClick={() => navigate(-1)} />
    </div>
  );
};
