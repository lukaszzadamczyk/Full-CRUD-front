import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header_logo">User Data Management</h1>
      <div className="header_menu">
        <NavLink className="header_link" to="/">
          <p>Home</p>
        </NavLink>
        <NavLink className="header_link" to="/addUser">
          <p>Add User</p>
        </NavLink>
      </div>
    </header>
  );
};
