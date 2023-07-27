import React, { useState } from "react";
import burgerMenu from "../assets/burger-menu.svg";
import user from "../assets/user.svg";
import { NavLink } from "react-router-dom";
export default function Header({ setMenuOpen, menuOpen }) {
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function getBagData() {
    console.log("bag data");
  }
  function getShoeData() {
    console.log("shoe data");
  }

  return (
    <header>
      <div className="header-main">
        <img
          src={burgerMenu}
          alt="side menu"
          width={"20px"}
          className="burger-menu"
          onClick={toggleMenu}
        />

        <h2 className="header-logo">LUXORBAG</h2>
        <img src={user} alt="" width={"20px"} />
      </div>

      <nav>
        <NavLink
          to="."
          style={({ isActive }) => (isActive ? activeStyle : null)}
          onClick={getBagData}
        >
          Bags
        </NavLink>
        <NavLink
          to="shoes"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          onClick={getShoeData}
        >
          Shoes
        </NavLink>
      </nav>
    </header>
  );
}
