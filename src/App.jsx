import data from "./data.json";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";

import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Bags from "./Pages/Bags";
import Shoes from "./Pages/Shoes";

const BagContext = createContext();
function App() {
  const bagData = data.luxuryBags;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <BagContext.Provider value={{ bagData, windowSize }}>
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
export { BagContext };
