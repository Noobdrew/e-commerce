import React, { useContext, useEffect, useRef, useState } from "react";
import BagElement from "../components/BagElement";
import { BagContext } from "../App";
import Filter from "../components/Filter";

export default function Bags() {
  const bagCount = useRef(0);
  bagCount.current = 0;
  const { shoeData, windowSize, filter } = useContext(BagContext);
  const filteredData = applyFilter(shoeData, filter);

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

  return (
    <div className="bags-page">
      <h1>Luxury Shoes </h1>
      <p className="bag-count">
        {" "}
        {bagCount.current} bags out of {filteredData.length}
      </p>
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
