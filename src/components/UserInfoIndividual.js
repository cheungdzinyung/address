import React from "react";
import { Link } from "react-router-dom";

const UserInfoIndividual = ({ user, i }) => {
  return (
    <div key={i}>
      <Link to={`user/${user.login.uuid}`} state={user}>
        <img src={user.picture.thumbnail} alt="avatar" />
        {user.name.title}. {user.name.first} {user.name.last}
      </Link>
    </div>
  );
};

export default UserInfoIndividual;
