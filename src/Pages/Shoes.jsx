import React, { useContext, useEffect, useRef, useState } from "react";
import BagElement from "../components/BagElement";
import { BagContext } from "../App";
import Filter from "../components/Filter";

export default function Bags() {
  const bagCount = useRef(0);
  bagCount.current = 0;
  const { shoeData, windowSize, filter } = useContext(BagContext);
  const [filteredData, setFilterData] = useState(shoeData);
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [sort, setSort] = useState("a-z");
  const [sortedProducts, setSortedProducts] = useState(filteredData);

  useEffect(() => {
    setFilterData(applyFilter(shoeData, filter));
  }, [filter, sort]);
  useEffect(() => {
    handleSortChange({ target: { value: sort } });
  }, [filteredData]);
  useEffect(() => {
    setDisplayedData(sortedProducts.slice(0, visibleCount));
  }, [visibleCount, sort, sortedProducts]);

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

  //sort data
  function sortByNameAZ(arr) {
    return arr.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  function sortByNameZA(arr) {
    return arr.slice().sort((a, b) => b.name.localeCompare(a.name));
  }

  function sortByPriceLowHigh(arr) {
    return arr.slice().sort((a, b) => {
      if (a.discounted && b.discounted) {
        return a.discountedPrice - b.discountedPrice;
      }
      if (a.discounted && !b.discounted) {
        return a.discountedPrice - b.price;
      }
      if (!a.discounted && b.discounted) {
        return a.price - b.discountedPrice;
      } else {
        return a.price - b.price;
      }
    });
  }

  function sortByPriceHighLow(arr) {
    return arr.slice().sort((a, b) => {
      if (a.discounted && b.discounted) {
        return b.discountedPrice - a.discountedPrice;
      }
      if (a.discounted && !b.discounted) {
        return b.price - a.discountedPrice;
      }
      if (!a.discounted && b.discounted) {
        return b.discountedPrice - a.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);

    switch (selectedSort) {
      case "a-z":
        setSortedProducts(sortByNameAZ(filteredData));
        break;
      case "z-a":
        setSortedProducts(sortByNameZA(filteredData));
        break;
      case "low-high":
        setSortedProducts(sortByPriceLowHigh(filteredData));
        break;
      case "high-low":
        setSortedProducts(sortByPriceHighLow(filteredData));
        break;
      default:
        setSortedProducts(filteredData);
        break;
    }
  };

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
          <Filter setMenuOpen={setMenuOpen} />{" "}
          <button className="close-filter" onClick={closeFilter}>
            X
          </button>{" "}
        </>
      ) : (
        ""
      )}
      <h1>Luxury Shoes </h1>

      <p className="bag-count">
        {" "}
        {bagCount.current} shoes out of {sortedProducts.length}
      </p>
      <div className="sorting-conteiner">
        {windowSize < 770 ? (
          <div className="filter-button" onClick={toggleMenu}>
            Open Filter +
          </div>
        ) : (
          ""
        )}
        <div className="sort-button">
          <p>Sort</p>
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => handleSortChange(e)}
          >
            <option value="a-z">Alphabetical A-Z</option>
            <option value="z-a">Alphabetical Z-A</option>
            <option value="low-high">Price Low-High</option>
            <option value="high-low">Price High-Low</option>
          </select>
        </div>
      </div>
      <div className="bag-main">
        {windowSize > 770 ? <Filter /> : ""}
        <div className="bag-container"> {bagElement}</div>
      </div>
      {displayedData.length >= sortedProducts.length ? (
        <p style={{ marginTop: "20px" }}>No more shoes</p>
      ) : (
        <button className="load-more" onClick={loadMoreBags}>
          Load More
        </button>
      )}
    </div>
  );
}
