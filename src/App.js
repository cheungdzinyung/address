import React from "react";
import { Router } from "./routes";
import { Header } from "./components/atoms/Header/Header";
import { AddressBookProvider } from "./contexts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AddressBookProvider>
        <Router />
      </AddressBookProvider>
    </div>
  );
}

export default App;
