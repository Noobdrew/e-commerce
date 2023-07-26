import React, { useContext } from "react";

export default function ProductCounter() {
  const { bagData, bagDataReduced } = useContext;
  console.log(bagDataReduced);
  return <div>ProductCounter</div>;
}
