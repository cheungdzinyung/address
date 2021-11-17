import React from "react";
import Router from "./routes/Routes";
import { useFetchAllUsers } from "./api/Request";
import "./App.css";
import loading from "./assets/images/loading.gif";

function App() {
  const { users, isLoading, hasError } = useFetchAllUsers();

  return (
    <div className="App">
      {hasError && <p>Something went wrong</p>}
      {isLoading ? (
        <div id="spinner">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <Router users={users} />
      )}
    </div>
  );
}

export default App;
