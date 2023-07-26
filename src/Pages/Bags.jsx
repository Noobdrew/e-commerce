import React, { useContext, useEffect, useRef, useState } from "react";
import BagElement from "../components/BagElement";
import { BagContext } from "../App";
import Filter from "../components/Filter";

export default function Bags() {
  const bagCount = useRef(0);
  bagCount.current = 0;

  const [displayedData, setDisplayedData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    setDisplayedData(bagData.slice(0, visibleCount));
  }, [visibleCount]);

  const { bagData, windowSize } = useContext(BagContext);
  const bagElement = displayedData.map((bag) => {
    bagCount.current++;
    return <BagElement key={bag.name} bag={bag} />;
  });

  function loadMoreBags() {
    setVisibleCount((prevCount) => prevCount + 10);
  }

  return (
    <div className="bags-page">
      <h1>Luxury Bags </h1>
      <p className="bag-count">
        {" "}
        {bagCount.current} bags out of {bagData.length}
      </p>
      <div className="bag-main">
        {windowSize > 770 ? <Filter /> : ""}
        <div className="bag-container"> {bagElement}</div>
      </div>
      {displayedData.length >= bagData.length ? (
        <p style={{ marginTop: "20px" }}>no more bags</p>
      ) : (
        <button className="load-more" onClick={loadMoreBags}>
          Load More
        </button>
      )}
    </div>
  );
}
