import React, { useContext, useEffect, useState } from "react";
import { BagContext } from "../App";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const white = searchParams.get("t1");
  const black = searchParams.get("t2");
  const beige = searchParams.get("t3");
  const pink = searchParams.get("t4");
  const blue = searchParams.get("t5");
  const brown = searchParams.get("t6");

  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  const { filter, setFilter, bagData, shoeData } = useContext(BagContext);
  const condition = [
    { t1: white },
    { t2: black },
    { t3: beige },
    { t4: pink },
    { t5: blue },
    { t6: brown },
  ];

  function filterByConditions(array, conditions) {
    const arr = [];
    array.forEach((item) => {
      for (let i = 0; i < conditions.length; i++) {
        const condition = conditions[i];
        const key = Object.keys(condition)[0];
        const value = condition[key];
        if (item.color == value) {
          arr.push(item);
        }
      }
    });
    if (arr.length == 0) return array;
    else return arr;
  }

  //filterd by color
  const filteredBags = filterByConditions(bagData, condition);
  const filteredShoes = filterByConditions(shoeData, condition);
  console.log(filteredBags);

  //filter by price

  useEffect(() => {
    setFilter([filteredBags, filteredShoes]);
  }, []);

  function handleFilter(key, value) {
    setSearchParams((prevParams) => {
      if (!prevParams.has(key)) {
        prevParams.append(key, value);
      } else {
        prevParams.delete(key);
      }
      return prevParams;
    });
  }
  function filterByPrice() {}

  function getFilerPrice(e) {
    setMinPrice(e.target.value);
    setMaxPrice(e.target.value);
  }

  return (
    <div className="filter-container">
      <h2 className="filter-by">Filter by</h2>
      <div className="filter-color">
        <h3>Color</h3>
        <ul className="filter-color-list">
          <li
            style={
              condition[0].t1
                ? { backgroundColor: "#E17654", color: "#FFEAD0" }
                : {}
            }
            onClick={() => handleFilter("t1", "white")}
          >
            White
          </li>
          <li
            style={
              condition[1].t2
                ? { backgroundColor: "#E17654", color: "#FFEAD0" }
                : {}
            }
            onClick={() => handleFilter("t2", "black")}
          >
            Black
          </li>
          <li
            style={
              condition[2].t3
                ? { backgroundColor: "#E17654", color: "#FFEAD0" }
                : {}
            }
            onClick={() => handleFilter("t3", "beige")}
          >
            Beige
          </li>
          <li
            style={
              condition[3].t4
                ? { backgroundColor: "#E17654", color: "#FFEAD0" }
                : {}
            }
            onClick={() => handleFilter("t4", "pink")}
          >
            Pink
          </li>
          <li
            style={
              condition[4].t5
                ? { backgroundColor: "#E17654", color: "#FFEAD0" }
                : {}
            }
            onClick={() => handleFilter("t5", "blue")}
          >
            Blue
          </li>
          <li
            style={
              condition[5].t6
                ? { backgroundColor: "#E17654", color: "#FFEAD0" }
                : {}
            }
            onClick={() => handleFilter("t6", "brown")}
          >
            Brown
          </li>
        </ul>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <form action="" className="filter-price-form" onSubmit={filterByPrice}>
          <input
            type="number"
            name="price"
            id="filter-price"
            placeholder="Set max price"
            onChange={getFilerPrice}
          />

          <button>Filter</button>
        </form>
      </div>
    </div>
  );
}
