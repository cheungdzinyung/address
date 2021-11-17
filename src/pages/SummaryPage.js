import React from "react";
import Search from "../components/Search";

const SummaryPage = ({ users }) => {
  return (
    <div>
      <Search users={users} />
    </div>
  );
};

export default SummaryPage;
