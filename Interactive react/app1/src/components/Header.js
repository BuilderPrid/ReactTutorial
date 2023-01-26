import React from "react";
import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <img
        src={require("./images/Trollface.png")}
        className="headerImage"
      ></img>
      <h2>Header Component</h2>
      <h3>React Course Project</h3>
    </header>
  );
}
