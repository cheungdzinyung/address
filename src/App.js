import React from "react";
import { Router } from "./routes";
import "./App.css";
import { Header } from "./components/atoms/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
