import { useState} from 'react';
import './App.css'
import './style.css'
/* import styles from './Button.module.css'; */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 import Navbar from './Components/Navbar'

 import About from './Pages/About'
import Contact from './Pages/Contact' 
import Sign from './Pages/Sign'
import Shop from './Pages/Shop'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import ProductCard from "./Components/ProductCard"; 

import { useNavigate } from "react-router-dom";
import Carousel from "bootstrap/js/dist/carousel";



  


function Home({ favorites, setFavorites, cartlist, setCartlist }) {
/* const navigate = useNavigate(); */
const products = [
  { id: 1, name: "Chocolate Cake", price: 8.99, image: "/images/chocolate-cake.webp" },
  { id: 2, name: "Cookies", price: 5.5, image: "/images/chocolate-cookies.webp" },
  { id: 3, name: "Donuts", price: 6.5, image: "/images/chocolate-donuts.webp" },
  { id: 4, name: "Cookies", price: 8.5, image: "/images/cookies.webp" }
];

const products1 = [
  { id: 1, name: "Donuts1", price: 8.99, image: "/images/chocolate-cake.webp" },
  { id: 2, name: "Donuts2", price: 5.5, image: "/images/chocolate-cookies.webp" },
  { id: 3, name: "Donuts", price: 6.5, image: "/images/chocolate-donuts.webp" },
  { id: 4, name: "Donuts3", price: 8.5, image: "/images/cookies.webp" }
];


const [liked,SetLiked]=useState(false)

const funcliked=()=>{
SetLiked(true)
}





  return (
<>


{/* <div className="card">
<img src="/images/cake-header-main.webp" className="card-img" alt="cake"/>
<div className="card-img-overlay position-absolute headling_title ">
<h1 className="card-title  display-4  animate__animated animate__bounce">
Online Bakery Store

</h1>
<p className="headling_t  animate__animated  animate__flash">
Fresh Bakes Made Special For <br/> YouSweet Moments   
</p>



<button
  className="buynow animate__animated animate__heartBeat"

>
  Buy Now
</button>


</div>
</div> */}

<div className="card bgk">
<div className="card-img-overlay position-absolute headling_title ">
  <img src="/images/k1.png" className='k1' /> <img src="/images/k2.png" className='k2'/> <img src="/images/k3.png" className='k3'/>
   <img src="/images/k4.png" className='k4'/> <img src="/images/k5.png" className='k5'/>
<p>-50 dək endirim</p>
<p><span>Ilkin odenishsiz</span><span>Komissiyasiz</span><span>Ilkin odenishsiz</span></p>
</div>
</div>



<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex={0}>

    <h2 className="display-5 text-center animate__animated  animate__fadeInDown"  >Top Deals</h2>
     

<div className="row g-4 animate__animated animate__fadeInDown" >
{ products.map(
  
  (p)=>(<ProductCard key={p.id} product={p} 
    
    
    favorites={favorites}
  setFavorites={setFavorites}  
  
        cartlist={cartlist}
      setCartlist={setCartlist}
  
  />)
  
  )}


</div>
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex={0}>

<h2 className="display-5 text-center animate__animated  animate__fadeInDown"  >Donuts</h2>
     

<div className="row g-4 animate__animated animate__fadeInDown" >
{ products1.map(
  
  (p)=>(<ProductCard key={p.id} product={p} 
    
    
    favorites={favorites}
  setFavorites={setFavorites}  
  
        cartlist={cartlist}
      setCartlist={setCartlist}
  
  />)
  
  )}


</div>



  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex={0}>...</div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex={0}>...</div>
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

    {/* təkrar et ki, sonsuz fırlansın */}
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

  );
}




function Footer() {

return(
  <>
<div className="container">
<p>Copyright 2026</p>
</div>

  </>

 
);

}




function App() {
const [favorites, setFavorites] = useState([]);
const [cartlist, setCartlist] = useState([]);
  return (
    <>
  
 <BrowserRouter>

<Navbar favorites={favorites} cartlist={cartlist} />

  <Routes>
        <Route path="/" element={<Home    favorites={favorites}
      setFavorites={setFavorites}    cartlist={cartlist}
      setCartlist={setCartlist}  />} />
 <Route path="/about" element={<About />} />
   <Route path="/shop" element={<Shop />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/sign" element={<Sign />} />
  </Routes>

    <Footer /> 
 </BrowserRouter>
  
    </>
  );
}




export default App
