import React from "react";
import { useNavigate } from "react-router-dom";
import UserInfoDetail from "../components/UserInfoDetail";
import Button from "../components/Button";

const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <UserInfoDetail />
      <Button title="back" onClick={() => navigate(-1)} />
    </div>
  );
};

export default DetailPage;
