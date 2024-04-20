import React from "react";
import ReactDOM from "react-dom";
import reactLogo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={reactLogo} className="brand-logo" />
        <div className="brand-name">
          <h2>ReactFacts</h2>
        </div>
      </div>

      <div className="projectName">
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
}
