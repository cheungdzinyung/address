import React from "react";
import UserInfoIndividual from "./UserInfoIndividual";

const UserInfoSummary = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <UserInfoIndividual user={user} key={user.login.uuid} />;
      })}
    </div>
  );
};

export default UserInfoSummary;
