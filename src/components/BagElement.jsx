export default function ({ bag }) {
  const style = { textDecoration: "line-through" };
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
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}
