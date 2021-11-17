import React, { useState } from "react";
import UserInfoSummary from "../components/UserInfoSummary";
import styles from "./Search.module.css";

const Search = ({ users }) => {
  const [search, setSearch] = useState("");
  const filteredUsers =
    search.length === 0
      ? users
      : users.filter(
          (user) =>
            user.name.last.toLowerCase().includes(search.toLowerCase()) ||
            user.name.first.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      <input
        className={styles.searchBar}
        key="nameSearch"
        value={search}
        placeholder={"type to search by first or last name"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <UserInfoSummary users={filteredUsers} />
    </div>
  );
};

export default Search;
