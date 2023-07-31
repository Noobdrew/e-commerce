import React from "react";
import check from "../assets/check-green.png";

export default function Popup(props) {
  return (
    <div
      className={`popup-container ${props.trigger ? "slide-bottom" : "hidden"}`}
    >
      <div className="popup-inner">
        <img src={check} alt="check" width={"20px"} />
        <h3>Added to cart</h3>
      </div>
    </div>
  );
}
