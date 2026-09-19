import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 



function  Navbar({ favorites, cartlist}) {

     const [cartpopup, setCartpopup] = useState(false);
    const [favpopup, setFavpopup] = useState(false);

const favlistPopup=()=>{
    setFavpopup(true)
}


const CartlistPopup=()=>{
    setCartpopup(true)
}

const closesPopup=()=>{
   setFavpopup(false)


}

const closeCPopup=()=>{
   setCartpopup(false)


}



 
    return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <NavLink  to="/" className="navbar-brand">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink  to="/about" className="nav-link active" aria-current="page" >About</NavLink>
        </li>

          <li className="nav-item">
         <NavLink to="/shop" className="nav-link" >Shop</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/contact" className="nav-link" >Contact</NavLink>
        </li>

        <li className="nav-item">
         <button  type="button" className="cbutton" onClick={favlistPopup}><i className="fa-solid fa-heart"></i></button>
        <span>{favorites.length}</span></li>
          <li className="nav-item">
        <button  type="button" className="cbutton" onClick={CartlistPopup}> <span><i className="fa-solid fa-cart-arrow-down"></i></span></button> 
         <span>{cartlist.length}</span></li>


   

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


 {favpopup && (
        <div className="message">

          <h2>Favorites</h2>

          {favorites.length === 0 ? (
            <p>No favorites yet</p>
          ) : (
            favorites.map((item) => (
              <div key={item.id} className="fav-item">
                <h4>{item.name}</h4>
                <p>{item.price} ₼</p>
              <img src={item.image} />
              </div>
            ))
          )} 



          <button onClick={closesPopup}>
            Close
          </button>

        </div>
      )}



 {cartpopup && (
        <div className="message">

          <h2>Favorites</h2>

          {cartlist.length === 0 ? (
            <p>No cartlist yet</p>
          ) : (
            cartlist.map((item) => (
              <div key={item.id} className="fav-item">
                <h4>{item.name}</h4>
                <p>{item.price} ₼</p>
              <img src={item.image} />
              </div>
              
            ))
          )} 

 <h3>
          Total: {cartlist
            .reduce((sum, item) => sum + item.price, 0)
            .toFixed(2)} ₼
        </h3>

          <button onClick={closeCPopup}>
            Close
          </button>

        </div>
      )}


    </>
  );
}

export default Navbar;