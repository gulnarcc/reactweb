import { useState } from "react";
import "../App.css";
import ProductCard from "../Components/ProductCard";

function Shop({ favorites, setFavorites, cartlist, setCartlist }) {

   const products = [
{id:1, name:"iPhone 17 Pro 256 GB Silver", price:3149 , image:"/images/apple1.webp"},
{id:2, name:"iPhone 15 128 GB Black", price:1749.99  , image:"/images/apple2.webp"},
{id:3, name:"iPhone Air 1 TB Sky Blue", price:1300.99 , image:"/images/apple3.webp"},
{id:4, name:"iPhone 17 Pro 256 GB Silver", price:1000.99 , image:"/images/apple4.webp"},
{id:5, name:"iPhone 15 128 GB Black", price:2000.99  , image:"/images/apple5.webp"},
{id:6, name:"iPhone Air 1 TB Sky Blue", price:3000.99 , image:"/images/apple6.webp"},


]; 


   const products2 = [
{id:1, name:"Xiomi 9C", price:3149 , image:"/images/xiaomi1.webp"},
{id:2, name:"Xiaomi Redmi Note 15 6/128 GB Black", price:1749.99  , image:"/images/xiaomi2.webp"},
{id:3, name:"Xiaomi Redmi Note 15 Pro 8/256 ", price:1300.99 , image:"/images/xiaomi3.webp"},
{id:4, name:"Xiaomi Redmi 15 6/128 GB NFC Gray", price:1000.99 , image:"/images/xiaomi4.webp"},
{id:5, name:"Xiaomi 17 Ultra 16/512 GB Black", price:2000.99  , image:"/images/xiaomi5.webp"},
{id:6, name:"Xiaomi 18 Ultra 16/512 GB Black", price:3000.99 , image:"/images/xiaomi6.webp"},


];

  const [liked, SetLiked] = useState(false);

  const funcliked = () => {
    SetLiked(true);
  };

  return (
    <>

<div className="container">
<div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Apple</button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Xiaomi</button>
    <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Honor</button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Samsung</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Motorolla</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">

<h2 className="display-5 text-center  animate__animated   animate__fadeInDown ">
      Apple
      </h2>

      <div className="row g-4 ">
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

      
    </div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">

<h2 className="display-5 text-center animate__animated   animate__fadeInDown">
 Xiaomi
      </h2>

      <div className="row g-4 ">
        {products2.map((p) => (
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

    </div>
    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
  </div>
</div>

</div>
      
    </>
  );
}

export default Shop;