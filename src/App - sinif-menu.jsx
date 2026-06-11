import { useState } from 'react';
import './App.css'
import './style.css'
/* import styles from './Button.module.css'; */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* import About from './Pages/About';
import Contact from './Pages/Contact'; 
/* import { NavLink } from 'react-router-dom'; */


function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return(
    <>
    
  <h1>About</h1>
  <p> Proqramlaşdırmada təhlükəsizlik (security) — tətbiqlərin icazəsiz girişlərdən, məlumat sızmalarından və müxtəlif hücumlardan qorunması üçün istifadə olunan metod və prinsiplər toplusudur. Müasir dövrdə tətbiqlərin təhlükəsizliyi proqram təminatının keyfiyyətinin əsas göstəricilərindən biridir.
  </p>

  </>

  )
  


}

 function Contact() {

  return(
<>
<h1>Contact Page</h1>


</>

  ) 
} 

function Header() {

return(
<header> <h1  className='head'>react web {5 + 4}</h1> </header>

);

}

function Footer() {

return(
 <p  className='head'>2026</p>
 
);

}




function App() {

  return (
    <>
  <h1>Online Bakery Store</h1>
 <BrowserRouter>
 <nav>
  <Link to="/">Home</Link> |{" "}
  <Link to="/about">About</Link> |{" "}
  <Link to="/contact">Contact</Link> |{" "}
 </nav>

  <Routes>
        <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  </Routes>
 </BrowserRouter>
  
    </>
  );
}




export default App
