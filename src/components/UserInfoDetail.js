import React from "react";
import { useLocation } from "react-router-dom";

const UserInfoDetail = () => {
  const location = useLocation();
  const user = location.state;

  return (
    <div>
      <img src={user.picture.large} alt="profile" />
      <h1>
        {user.name.title}. {user.name.first} {user.name.last}
      </h1>
      <h2>Phone: {user.phone} </h2>
      <h2>Cell: {user.cell}</h2>
    </div>
  );
};

export default UserInfoDetail;
