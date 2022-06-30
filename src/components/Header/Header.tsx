import React from "react";
import { NavLink } from "react-router-dom";
import { FaUsersCog } from "react-icons/fa";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header_logo}>
        <span>
          <FaUsersCog />
        </span>
        <span>User Management</span>
      </h1>
      <nav className={classes.header_menu}>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#e82764" : "" })}
          className={classes.header_link}
          to="/"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#e82764" : "" })}
          className={classes.header_link}
          to="/addUser"
        >
          <p>Add User</p>
        </NavLink>
      </nav>
    </header>
  );
};
