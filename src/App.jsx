import data from "./data.json";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./components/Products";
import { useState } from "react";

function App() {
  const bagData = data.luxuryBags;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-conteiner">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <Filter />}
      <Products />
    </div>
  );
}

export default App;
