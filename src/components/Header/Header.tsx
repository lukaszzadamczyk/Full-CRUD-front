import React from "react";
import { NavLink } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header_logo}>
        {<ManageAccountsIcon fontSize="large" />}
        <span>User Data Management</span>
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
