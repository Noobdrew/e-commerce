import React, { useState } from "react";
import burgerMenu from "../assets/burger-menu.svg";
import user from "../assets/user.svg";
export default function Header({ setMenuOpen, menuOpen }) {
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }
  console.log(menuOpen);
  return (
    <header>
      <img
        src={burgerMenu}
        alt="side menu"
        width={"20px"}
        className="burger-menu"
        onClick={toggleMenu}
      />

      <h2 className="header-logo">LUXORBAG</h2>
      <img src={user} alt="" width={"20px"} />
    </header>
  );
}
