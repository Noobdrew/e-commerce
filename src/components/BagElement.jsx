import { useContext } from "react";
import Popup from "./Popup";
import { BagContext } from "../App";
import star from "../assets/star-filled.svg";

export default function ({ bag }) {
  const { setAddToCart } = useContext(BagContext);
  function ClickAddToCart() {
    setAddToCart(true);
    console.log("Added to cart: ", bag);
    setTimeout(() => {
      setAddToCart(false);
    }, 3000);
  }
  return (
    <div className="bag-element">
      <img src={bag.imageUrl} alt="bag" className="bag-element-img" />
      <h3 className="bag-element-title">{bag.name}</h3>

      <p className="bag-element-desc">{bag.description}</p>

      {bag.discounted ? (
        <>
          <p className="bag-discounted">${bag.price}</p>
          <h3 className="bag-element-price">${bag.discountedPrice}</h3>
        </>
      ) : (
        <h3 className="bag-element-price only-price">${bag.price}</h3>
      )}
      <p className="ratings">
        {" "}
        <img src={star} alt="star" width={"15px"} />
        {bag.ratings}
      </p>
      <button className="add-to-cart" onClick={ClickAddToCart}>
        Add to cart
      </button>
    </div>
  );
}
