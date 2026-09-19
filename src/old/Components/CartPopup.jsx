function CartPopup({ cart }) {
  return (
    <div className="cart-popup">
      <h3>Səbət</h3>

      {cart.length === 0 ? (
        <p>Səbət boşdur</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} — {item.price} ₼
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPopup;