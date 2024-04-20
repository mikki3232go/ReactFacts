import React from "react";
import ReactDOM from "react-dom";

export default function Main() {
  return (
    <div className="container">
      <h1 className="title">Fun facts about React</h1>
      <div className="middle">
        <ul className="facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Meta (formerly Facebook)</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}
