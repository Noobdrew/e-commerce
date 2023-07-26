import { useState } from "react";
import Filter from "./Filter";
import Header from "./Header";

import { Outlet } from "react-router-dom";
export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-wrapper">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <Filter />}
      <main>
        <Outlet />
      </main>

      <footer className="home-footer">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact us</a>
      </footer>
    </div>
  );
}
