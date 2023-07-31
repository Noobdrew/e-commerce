import React, { useContext, useState } from "react";
import burgerMenu from "../assets/burger-menu.png";
import user from "../assets/user.png";
import { NavLink } from "react-router-dom";
import { BagContext } from "../App";
export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const { setFilter } = useContext(BagContext);
  function getBagData() {
    setFilter({ colors: [], price: NaN });
  }
  function getShoeData() {
    setFilter({ colors: [], price: NaN });
  }

  return (
    <header>
      <div className="header-main">
        <img
          src={burgerMenu}
          alt="side menu"
          width={"20px"}
          className="burger-menu"
        />

        <h2 className="header-logo">LUXOR</h2>
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
