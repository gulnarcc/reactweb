import { useState } from 'react';
import './App.css'
import './style.css'
/* import styles from './Button.module.css'; */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 import Navbar from './Components/Navbar'
 import About from './Pages/About'
import Contact from './Pages/Contact' 
import Sign from './Pages/Sign'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/* import ProductCard from "./Components/ProductCard"; */

import { useNavigate } from "react-router-dom";


  


function Home() {
const navigate = useNavigate();
/*   const products = [
    { id: 1, name: "Lemon Pie", price: 8.99, image: "img1.jpg" },
    { id: 2, name: "Cake", price: 5.5, image: "img2.jpg" },
    { id: 3, name: "Chocolate", price: 6.5, image: "img4.jpg" },
    { id: 4, name: "Chocolate", price: 8.5, image: "img4.jpg" }
  ]; */


  return (
<>


<div className="card">
<img src="/images/cake-header-main.webp" className="card-img" alt="cake"/>
<div className="card-img-overlay position-absolute headling_title ">
<h1 className="card-title  display-4  animate__animated animate__bounce">
Online Bakery Store

</h1>
<p className="headling_t  animate__animated  animate__flash">
Fresh Bakes Made Special For <br/> YouSweet Moments   
</p>
<p >

<Link to="/about" className="buynow animate__animated animate__heartBeat">
  Buy Now
</Link>

<button
  className="buynow animate__animated animate__heartBeat"
  onClick={() => navigate("/about")}
>
  Buy Now
</button>
<a href="#" className="buynow   animate__animated  animate__heartBeat">Buy Now</a></p>


</div>
</div>

<h2 className="display-5 text-center animate__animated "  id="mya1">Top Deals</h2>
<div className="row g-4 animate__animated mya1"  ></div>
      <h2 className="text-center">Top Deals</h2>

{/*       <div className="row">
        {products.map((p) => (
          <ProductCard key={p.id} product={p}  />
        ))}
      </div> */}

</>

  );
}



function Header() {

return(
<header> <h1  className='head'>react web {5 + 4}</h1> </header>

);

}

function Footer() {
/*   const [late,setLate]=useState("najmite suda")
  const [text, setText] = useState("");
  const[name,setName]=useState("yellow")
const handleSubmit =(e)=>{
  e.preventDefault();
setText("Send!");

}; */
return(
  <>

<p>2026</p>


  </>

 
);

}




function App() {
  const products = [
    { id: 1, name: "Lemon Pie", price: 8.99, image: "img1.jpg" },
    { id: 2, name: "Cake", price: 5.5, image: "img2.jpg" },
    { id: 3, name: "Chocolate", price: 6.5, image: "img4.jpg" },
    { id: 4, name: "Chocolate", price: 8.5, image: "img4.jpg" }
  ];

  return (
    <>
 <BrowserRouter>

 <Navbar />

  <Routes>
        <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/sign" element={<Sign />} />
  </Routes>

    <Footer /> 
 </BrowserRouter>
  
    </>
  );
}




export default App
