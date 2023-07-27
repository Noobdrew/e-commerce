import React, { useContext, useEffect, useRef, useState } from "react";
import BagElement from "../components/BagElement";
import { BagContext } from "../App";
import Filter from "../components/Filter";

export default function Bags() {
  const bagCount = useRef(0);
  bagCount.current = 0;
  const { bagData, windowSize, filter } = useContext(BagContext);
  const filteredData = applyFilter(bagData, filter);
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  console.log(filteredData);
  useEffect(() => {
    setDisplayedData(filteredData.slice(0, visibleCount));
  }, [visibleCount, filter]);
  console.log(visibleCount);
  function applyFilter(data, filter) {
    return data.filter((item) => {
      // Filter by colors if 'colors' array exists in the filter object
      if (filter.colors && filter.colors.some((color) => color !== null)) {
        if (!filter.colors.includes(item.color)) {
          return false;
        }
      }

      // Filter by price if 'price' property exists in the filter object
      if (typeof filter.price !== "undefined") {
        if (filter.price) {
          if (item.discounted) {
            if (item.discountedPrice > filter.price) {
              return false;
            }
          } else if (item.price > filter.price) {
            return false;
          }
        }
      }
      // All conditions passed, keep the item in the filtered result
      return true;
    });
  }

  const bagElement = displayedData.map((bag) => {
    bagCount.current++;
    return <BagElement key={bag.name} bag={bag} />;
  });

  function loadMoreBags() {
    setVisibleCount((prev) => prev + 10);
  }
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }
  function closeFilter() {
    setMenuOpen(false);
  }
  return (
    <div className="bags-page">
      {menuOpen ? (
        <>
          <Filter />{" "}
          <button className="close-filter" onClick={closeFilter}>
            X
          </button>{" "}
        </>
      ) : (
        ""
      )}
      <h1>Luxury Bags </h1>

      <p className="bag-count">
        {" "}
        {bagCount.current} bags out of {filteredData.length}
      </p>
      {windowSize < 770 ? (
        <div className="sorting-conteiner">
          <div className="filter-button" onClick={toggleMenu}>
            Open Filter +
          </div>
          <div className="sort-button">
            <p>Sort</p>
            <select name="sort" id="sort">
              <option value="Sort A-Z">Alphabetical A-Z</option>
              <option value="Sort Z-A">Alphabetical Z-A</option>
              <option value="Sort price ascending">Price Low-High</option>
              <option value="Sort price descending">Price High-Low</option>
            </select>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="bag-main">
        {windowSize > 770 ? <Filter /> : ""}
        <div className="bag-container"> {bagElement}</div>
      </div>
      {displayedData.length >= filteredData.length ? (
        <p style={{ marginTop: "20px" }}>no more bags</p>
      ) : (
        <button className="load-more" onClick={loadMoreBags}>
          Load More
        </button>
      )}
    </div>
  );
}
