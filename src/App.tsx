import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { Test } from "types";


function App() {
  const foobar: Test = {
    name: "Lukasz",
  };

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
