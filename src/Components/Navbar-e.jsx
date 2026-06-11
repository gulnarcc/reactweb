import { NavLink } from "react-router-dom";
import { useState } from "react";
import CartPopup from "./CartPopup";
import ListPopup from "./ListPopup";
function Navbar({ cart ,list}) {

   const [showCart, setShowCart] = useState(false);
 const [showList, setShowlist] = useState(false);


  return (
    <>
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"}>Contact</NavLink>
      <NavLink to="/sign" className={({ isActive }) => isActive ? "link active" : "link"}>Sign in</NavLink>


  <div
        className="cart-icon"
        onClick={() => setShowCart(!showCart)}>
        🛒 <span>{cart.length}</span>
      </div>

      <div  onClick={() => setShowlist(!showList)} > <i

  className="fa-solid fa-heart myi heart"
></i><span>{list.length}</span></div>

    </nav>
  {showCart && <CartPopup cart={cart} />}
    {showList && <ListPopup list={list} />}
    </>
  );
}

export default Navbar;