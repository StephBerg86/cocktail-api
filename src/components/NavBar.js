import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/cocktails"
        exact={true}
      >
        Find your cocktail
      </NavLink>
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/"
        exact={true}
      >
        Home
      </NavLink>
    </div>
  );
}
