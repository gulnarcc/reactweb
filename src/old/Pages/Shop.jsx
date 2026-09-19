import { useState } from "react";
import "../App.css";
import ProductCard from "../Components/ProductCard";

function Shop({ favorites, setFavorites, cartlist, setCartlist }) {

  const products = [
    { id: 1, name: "Chocolate Cake", price: 8.99, image: "/images/chocolate-cake.webp" },
    { id: 2, name: "Cookies", price: 5.5, image: "/images/chocolate-cookies.webp" },
    { id: 3, name: "Donuts", price: 6.5, image: "/images/chocolate-donuts.webp" },
    { id: 4, name: "Cookies", price: 8.5, image: "/images/cookies.webp" }
  ];

  const [liked, SetLiked] = useState(false);

  const funcliked = () => {
    SetLiked(true);
  };

  return (
    <>
      <h2 className="display-5 text-center animate__animated animate__fadeInDown">
        Top Deals
      </h2>

      <div className="row g-4 animate__animated animate__fadeInDown">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            favorites={favorites}
            setFavorites={setFavorites}
            cartlist={cartlist}
            setCartlist={setCartlist}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;