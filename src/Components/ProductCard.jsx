import { useState } from "react";
import '../App.css';


function ProductCard({
  product,
  favorites,
  setFavorites,
  cart,
  setCart,
  setFavoriteNotification
}) {

  const [added, setAdded] = useState(false);

  const [liked, setLiked] = useState(false);


  const funcliked = () => {

    if (!liked) {
  console.log("CLICK");
  console.log("liked:", liked);
      // Favorite-ə əlavə et
      setFavorites([
        ...favorites,
        product
      ]);


      // Navbar-da animasiyanı göstər
      setFavoriteNotification(product);


      // 1 saniyə sonra yox et
      setTimeout(() => {

        setFavoriteNotification(null);

      }, 1000);


    } else {

      // Favorite-dən sil
      setFavorites(
        favorites.filter(
          item => item.id !== product.id
        )
      );

    }


    // Ürəyi dəyiş
    setLiked(!liked);

  };


  const addToCart = () => {

    setCart([
      ...cart,
      product
    ]);

    setAdded(true);

  };


  return (

    <div className="products col-12 col-sm-6 col-md-4 col-lg-2">

      <div className="card h-100">


        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        />


        <div className="card-body">


          <h5 className="card-title">
            {product.name}
          </h5>


          <p className="card-text">
            {product.price}₼
          </p>


          {/* FAVORITE */}

          <button
            type="button"
            className="cbutton"
            onClick={funcliked}
          >

            <i
              className={`fa-solid fa-heart heart ${
                liked ? "red" : "grey"
              }`}
            ></i>

          </button>


          {/* CART */}

          <button
            type="button"
            className={`cbutton ${
              added ? "green" : ""
            }`}
            onClick={addToCart}
          >

            <i className="fa-solid fa-cart-arrow-down"></i>

            В корзину

          </button>


        </div>

      </div>

    </div>

  );
}


export default ProductCard;