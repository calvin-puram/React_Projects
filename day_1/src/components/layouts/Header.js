import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Task List</h1>
      <NavLink exact to='/'>
        Home
      </NavLink>{" "}
      <span style={nav}></span>
      <NavLink to='/about'>About</NavLink>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const nav = {
  margin: "0 1rem",
};

export default Header;
