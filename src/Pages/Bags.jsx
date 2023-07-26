import React, { useContext, useEffect, useRef, useState } from "react";
import BagElement from "../components/BagElement";
import { BagContext } from "../App";
import Filter from "../components/Filter";

export default function Bags() {
  const bagCount = useRef(0);
  bagCount.current = 0;

  const { bagData, bagDataReduced, windowSize } = useContext(BagContext);
  const bagElement = bagDataReduced.map((bag) => {
    bagCount.current++;
    return <BagElement key={bag.name} bag={bag} />;
  });

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
    </div>
  );
}
