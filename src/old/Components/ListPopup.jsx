function ListPopup({ list }) {
  return (
    <div className="cart-popup">
      <h3>Favlist</h3>

      {list.length === 0 ? (
        <p>0</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item.name} — {item.price} ₼
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListPopup;