import React from "react";
import { Router } from "./routes";
import { Header } from "./components/atoms/Header/Header";
import { AddressBookProvider } from "./contexts";
import styles from "./App.module.css";

function App() {
  return (
    <div className={`App ${styles.app}`}>
      <Header />
      <AddressBookProvider>
        <Router />
      </AddressBookProvider>
    </div>
  );
}

export default App;
