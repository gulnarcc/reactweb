 

import './App.css'
import Navbar from './Components/Navbar';
import Signin from './Pages/Signin';
import About from './Pages/About';
import Sales from './Pages/Sales';
import Shop from './Pages/Shop';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Order from './Pages/Order';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ProductCard from './Components/ProductCard.jsx';

function Home({
  favorites,
  setFavorites,
  cart,
  setCart,
  setFavoriteNotification
}) 
{

   const products = [
{id:1, name:"iPhone 17 Pro 256 GB Silver", price:3149 , image:"/images/apple1.webp"},
{id:2, name:"iPhone 15 128 GB Black", price:1749.99  , image:"/images/apple2.webp"},
{id:3, name:"iPhone Air 1 TB Sky Blue", price:1300.99 , image:"/images/apple3.webp"},
{id:4, name:"iPhone 17 Pro 256 GB Silver", price:1000.99 , image:"/images/apple4.webp"},
{id:5, name:"iPhone 15 128 GB Black", price:2000.99  , image:"/images/apple5.webp"},
{id:6, name:"iPhone Air 1 TB Sky Blue", price:3000.99 , image:"/images/apple6.webp"},


]; 

 




 const products1 = [
{id:7, name:"Notbuk Asus ROG Zephyrus G14", price:2700.99 , image:"/images/not1.webp"},
{id:8, name:"Notbuk HP Victus 15-FB3049CI (D15ZJEA)", price:2500.99  , image:"/images/not2.webp"},
{id:9, name:"Notbuk MSI Cyborg 15 B13WEKG-", price:1600.99 , image:"/images/not3.webp"},
{id:10, name:"Notbuk MSI Cyborg 13 B13WEKG-", price:1500.99 , image:"/images/not4.webp"},
{id:11, name:"iPhone 15 128 GB Black", price:2000.99  , image:"/images/not5.webp"},
{id:12, name:"iPhone Air 1 TB Sky Blue", price:3000.99 , image:"/images/not6.webp"},

]; 
 const products2 = [
{id:13, name:"Televizor Hisense RGB MiniLed 116UXQ", price:3289.99 , image:"/images/tv1.webp"},
{id:14, name:"Televizor Hisense QLED 55E7Q", price:"1800"  , image:"/images/tv2.webp"},
{id:15, name:"Sony", price:"300.99 ", image:"/images/tv3.webp"},
{id:16, name:"Televizor Sony KD-55X80L", price:"320" , image:"/images/tv4.webp"},
{id:17, name:"iPhone 15 128 GB Black", price:"1800"  , image:"/images/tv5.webp"},
{id:18, name:"iPhone Air 1 TB Sky Blue", price:"300" , image:"/images/tv6.webp"},

]; 
 const products3 = [
{id:13, name:"Headphone Apple AirPods ", price:679.99 , image:"/images/head1.webp"},
{id:14, name:"Xiaomi Buds 6 (M2540E1) BHR08ODGL ", price:180019.99  , image:"/images/head2.webp"},
{id:15, name:"Apple AirPods 4 MXP63ZE/A", price:100.99 , image:"/images/head3.webp"},
{id:16, name:"Euroacs EA-X25 AQULAI843855 ", price:89.99 , image:"/images/head4.webp"},
{id:17, name:"Hama Freedom Buddy 00184165", price:119.99  , image:"/images/head5.webp"},
{id:18, name:"Hama Spirit Pure 00184109 ", price:49.99 , image:"/images/head6.webp"},

]; 




  return(
<>
<div className="card bgk">
<div className="card-img-overlay position-absolute headling_title ">
  <img src="/images/k1.png" className='k1 animate__animated  animate__bounceInDown' />
   <img src="/images/k2.png" className='k2 animate__animated  animate__bounceInDown'/> 
   <img src="/images/k3.png" className='k3 animate__animated  animate__bounceInDown'/>
   <img src="/images/k4.png" className='k4 animate__animated  animate__bounceInDown'/> 
   <img src="/images/k5.png" className='k5 animate__animated  animate__bounceInDown'/>
<p className='headlinga animate__animated animate__zoomInDown'>-50% скидки </p>
<span className='ke21 animate__animated animate__zoomInRight'>Без первоначального взноса</span>
<span className='ke22 animate__animated animate__zoomInRight'>Без комиссии</span>
<span className='ke23 animate__animated animate__zoomInRight'>С рассрочкой</span>

</div>
</div>





<div className='container'>
  <h2>Хит продаж</h2>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
      Смартфоны 

</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
Ноутбуки
</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Телевизоры
</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="posuda-tab" data-bs-toggle="tab" data-bs-target="#posuda-tab-pane" type="button" role="tab" aria-controls="posuda-tab-pane" aria-selected="false" >Наушники</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

<div className="row row-cols-1 row-cols-md-3 g-4">

{products.map(

(p)=>(

<ProductCard
  key={p.id}
  product={p}
  favorites={favorites}
  setFavorites={setFavorites}
  cart={cart}
  setCart={setCart}
  setFavoriteNotification={setFavoriteNotification}
/>
)

)}
</div>
  </div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
<div className="row row-cols-1 row-cols-md-3 g-4">
{products1.map(

(p)=>(

<ProductCard
  key={p.id}
  product={p}
  favorites={favorites}
  setFavorites={setFavorites}
  cart={cart}
  setCart={setCart}
  setFavoriteNotification={setFavoriteNotification}
/>
)

)}
</div>
  </div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
<div className="row row-cols-1 row-cols-md-3 g-4">

{products2.map(

(p)=>(

<ProductCard
  key={p.id}
  product={p}
  favorites={favorites}
  setFavorites={setFavorites}
  cart={cart}
  setCart={setCart}
  setFavoriteNotification={setFavoriteNotification}
/>
)

)}
</div>
  </div>
  <div class="tab-pane fade" id="posuda-tab-pane" role="tabpanel" aria-labelledby="posuda-tab" tabindex="0">

<div className="row row-cols-1 row-cols-md-3 g-4">

{products3.map(

(p)=>(

<ProductCard
  key={p.id}
  product={p}
  favorites={favorites}
  setFavorites={setFavorites}
  cart={cart}
  setCart={setCart}
  setFavoriteNotification={setFavoriteNotification}
/>
)

)}
</div>
  </div>
</div>



</div>



<div className="slider">
  <div className="slide-track">
    <img src="/images/1b.webp" alt="" />
    <img src="/images/2b.webp" alt="" />
    <img src="/images/3b.webp" alt="" />
    <img src="/images/4b.webp" alt="" />
    <img src="/images/5b.webp" alt="" />
    <img src="/images/6b.webp" alt="" />
    <img src="/images/7b.webp" alt="" />
    <img src="/images/8b.webp" alt="" />

    <img src="/images/1b.webp" alt="" />
    <img src="/images/2b.webp" alt="" />
    <img src="/images/3b.webp" alt="" />
    <img src="/images/4b.webp" alt="" />
    <img src="/images/5b.webp" alt="" />
    <img src="/images/6b.webp" alt="" />
    <img src="/images/7b.webp" alt="" />
    <img src="/images/8b.webp" alt="" />
  </div>
</div>


</>
  )

}



function Footer(){
  return(
    <>
<footer className="footer">
  <div className="footer-container">

    <div className="footer-menu">
      <h3>Меню</h3>
      <ul>
        <li>О нас</li>
        <li>Товары</li>
        <li>Акции</li>
        <li>Контакты</li>
        <li>Вход</li>
      </ul>
    </div>

<div className="footer-info">
  <h3>Контакты</h3>

  <p>
    <i class="fa-solid fa-phone"></i>
    +994 50 606 60 60
  </p>

  <p>
    <i class="fa-solid fa-envelope"></i>
    info@shop.az
  </p>

  <p>
    <i class="fa-solid fa-location-dot"></i>
    Баку, Азербайджан
  </p>


</div>

    <div className="footer-social">
      <h3>Мы в соцсетях</h3>

      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </li>
      </ul>
    </div>

  </div>

  <div className="footer-copy">
    Copyright © 2026
  </div>
</footer>
    </>


  )
}

  function App(){
const [favorites, setFavorites] = useState([]);
const [cart, setCart] = useState([]);
const [favoriteNotification, setFavoriteNotification] = useState(null);
  return(
    <BrowserRouter>

 <Navbar
  favorites={favorites}
  cart={cart}
  setCart={setCart}
  setFavorites={setFavorites}
  favoriteNotification={favoriteNotification}
/>
      <Routes>
        <Route
  path="/"
  element={
    <Home
  favorites={favorites}
  setFavorites={setFavorites}
  cart={cart}
  setCart={setCart}
  setFavoriteNotification={setFavoriteNotification}
    />
  }
/>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
         <Route path="/sales" element={<Sales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/order" element={<Order />} />
         <Route path="/shop" element={<Shop 
         
               favorites={favorites}
      setFavorites={setFavorites}
       cart={cart}
 setCart={setCart}
         
         />} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}


export default App
