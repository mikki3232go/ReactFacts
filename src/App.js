import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}
