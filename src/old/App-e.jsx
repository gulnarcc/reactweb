import { useState } from 'react';
import './App.css'
import './style.css'
/* import styles from './Button.module.css'; */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 import Navbar from './Components/Navbar';
 import About from './Pages/About';
import Contact from './Pages/Contact'; 
import ProductCard from "./Components/ProductCard";
/* import Home from "./Pages/Home"; */
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";


  



function Home({ addToCart, addToList, removeFromList }) {
  
  const products = [
    { id: 1, name: "Lemon Pie", price: 8.99, image: "img1.jpg" },
    { id: 2, name: "Cake", price: 5.5, image: "img2.jpg" },
    { id: 3, name: "Chocolate2", price: 6.5, image: "img3.jpg" },
    { id: 4, name: "Chocolate", price: 8.5, image: "img4.jpg" }
  ];



  return (
    <>
      <h2 className="text-center">Top Deals</h2>

      <div className="row">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} addToList={addToList}  removeFromList={removeFromList} />
        ))}
      </div>
    </>
  );
}

function Header() {

return(
<header> <h1  className='head'>react web {5 + 4}</h1> </header>

);

}

function Footer() {

return(
  <>
<p>2026</p>
  </>
);

}




function App() {
  const [cart, setCart] = useState([]);

   const [list, setList] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

    const addToList = (product) => {
    setList([...list, product]);
  };


  const removeFromList = (id) => {
  setList(list.filter((item) => item.id !== id));
};

  return (
    <BrowserRouter>
      <Navbar cart={cart}  list={list}  />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}  addToList={addToList}   removeFromList={removeFromList}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}




export default App
