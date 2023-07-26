import React from "react";

export default function Filter() {
  return (
    <div className="filter-container">
      <h2 className="filter-by">Filter by</h2>
      <div className="filter-color">
        <h3>Color</h3>
        <ul className="filter-color-list">
          <li>White</li>
          <li>Black</li>
          <li>Beige</li>
          <li>Pink</li>
          <li>Blue</li>
          <li>Brown</li>
        </ul>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <form action="" className="filter-price-form">
          <input
            type="number"
            name="min-price"
            id="filter-min-price"
            placeholder="From..."
          />
          <input
            type="number"
            name="max-price"
            id="filter-max-price"
            placeholder="To..."
          />
          <button>Filter</button>
        </form>
      </div>
    </div>
  );
}
