import data from "./data.json";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./components/Products";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Bags from "./Pages/Bags";
import Shoes from "./Pages/Shoes";

const BagContext = createContext();
function App() {
  const bagData = data.luxuryBags;
  const bagDataReduced = bagData.slice(0, 10);
  console.log(bagDataReduced);
  return (
    <BagContext.Provider value={{ bagData, bagDataReduced }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Bags />} />
            <Route path="shoes" element={<Shoes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BagContext.Provider>
  );
}

export default App;
