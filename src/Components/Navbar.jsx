import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


function Navbar({
  favorites,
  cart,
  setCart,
  setFavorites,
  favoriteNotification
}) {

  const navigate = useNavigate();


  const confirmOrder = () => {

    navigate("/order");

    SetPopupCard(false);

  };


  /* SEARCH */

  const [searchp, SetSearchp] = useState(false);


  const searchFunction = () => {

    SetSearchp(true);

  };


  const closeModal = () => {

    SetSearchp(false);

  };


  /* FAVORITE POPUP */

  const [popupfav, SetPopupFav] = useState(false);


  const openfav = () => {

    SetPopupFav(true);

  };


  const closepopupfav = () => {

    SetPopupFav(false);

  };


  /* CART POPUP */

  const [popupcard, SetPopupCard] = useState(false);


  const opencard = () => {

    SetPopupCard(true);

  };


  const closepopupcard = () => {

    SetPopupCard(false);

  };


  /* REMOVE CART */

  const removeCartItem = (id) => {

    setCart(
      cart.filter(
        item => item.id !== id
      )
    );

  };


  /* REMOVE FAVORITE */

  const removeFavoriteItem = (id) => {

    setFavorites(
      favorites.filter(
        item => item.id !== id
      )
    );

  };


  return (

    <>

      {/* FAVORITE ANIMATION */}

      {favoriteNotification && (

        <div className="favorite-fly">

          <img
            src={favoriteNotification.image}
            alt={favoriteNotification.name}
          />


          <div className="favorite-fly-text">

            <strong>
              {favoriteNotification.name}
            </strong>

            <span>
              Favorite əlavə edildi ❤️
            </span>

          </div>

        </div>

      )}


      {/* NAVBAR */}

      <nav className="navbar navbar2 navbar-expand-lg bg-body-tertiary">

        <div className="container-fluid">


          <NavLink
            to="/"
            className="navbar-brand"
          >

            <img
              src="/images/logo.svg"
              alt="logo"
            />

          </NavLink>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"></span>

          </button>


          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >


            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <li className="nav-item">

                <NavLink
                  to="/about"
                  className="nav-link"
                >
                  О нас
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/products"
                  className="nav-link"
                >
                  Товары
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/sales"
                  className="nav-link"
                >
                  Акции
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/contact"
                  className="nav-link"
                >
                  Контакты
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/signin"
                  className="nav-link"
                >
                  Вход
                </NavLink>

              </li>


              {/* FAVORITES BUTTON */}

              <li className="nav-item">

                <button
                  type="button"
                  className="buttonc paddingtop"
                  onClick={openfav}
                >

                  <i className="fa-solid fa-heart"></i>

                  {favorites.length}

                </button>

              </li>


              {/* CART BUTTON */}

              <li className="nav-item">

                <button
                  type="button"
                  className="buttonc paddingtop"
                  onClick={opencard}
                >

                  <i className="fa-solid fa-cart-shopping"></i>

                  {cart.length}

                </button>

              </li>


            </ul>


            {/* SEARCH BUTTON */}

            <button
              type="button"
              className="buttonc"
              onClick={searchFunction}
            >

              <i className="fa-solid fa-magnifying-glass"></i>

            </button>


            {searchp && (

              <div className="modalsearch">

                <button
                  type="button"
                  className="close buttonc"
                  onClick={closeModal}
                >

                  <i className="fa-solid fa-xmark"></i>

                </button>


                <form
                  className="d-flex"
                  role="search"
                >

                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />


                  <button
                    className="btn btn-light"
                    type="submit"
                  >
                    Search
                  </button>

                </form>

              </div>

            )}

          </div>

        </div>

      </nav>


      {/* FAVORITES POPUP */}

      {popupfav && (

        <div className="fav">

          <button
            type="button"
            className="close buttonc"
            onClick={closepopupfav}
          >

            <i className="fa-solid fa-xmark"></i>

          </button>


          <h2>
            Избранные
          </h2>


          {favorites.length === 0 ? (

            <p>
              0 favorites
            </p>

          ) : (

            favorites.map((item) => (

              <div
                key={item.id}
                className="cartdiv"
              >

                <p>

                  <img
                    src={item.image}
                    className="cartimg"
                    alt={item.name}
                  />

                </p>


                <p className="namep">
                  {item.name}
                </p>


                <p>
                  {item.price}
                </p>


                <button
                  className="buttonc"
                  onClick={() =>
                    removeFavoriteItem(item.id)
                  }
                >

                  <i className="fa-solid fa-trash"></i>

                </button>

              </div>

            ))

          )}

        </div>

      )}


      {/* CART POPUP */}

      {popupcard && (

        <div className="fav">


          <button
            type="button"
            className="close buttonc"
            onClick={closepopupcard}
          >

            <i className="fa-solid fa-xmark"></i>

          </button>


          <h2>
            Корзина
          </h2>


          {cart.map((item) => (

            <div
              key={item.id}
              className="cartdiv"
            >

              <p>

                <img
                  src={item.image}
                  className="cartimg"
                  alt={item.name}
                />

              </p>


              <p className="namep">
                {item.name}
              </p>


              <p className="red">
                {item.price}
              </p>


              <button
                className="buttonc"
                onClick={() =>
                  removeCartItem(item.id)
                }
              >

                <i className="fa-solid fa-trash"></i>

              </button>

            </div>

          ))}


          <h3 className="left">

            Итоговая сумма:

            {
              cart.reduce(
                (total, item) =>
                  total + item.price,
                0
              )
            }

            ₼

          </h3>


          <h3>

            <button
              type="button"
              className="zakaz"
              onClick={confirmOrder}
            >

              Подтвердить заказ

            </button>

          </h3>


        </div>

      )}

    </>

  );

}


export default Navbar;