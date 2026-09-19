import { useState } from 'react';
import './App.css'
import './style.css'
/* import styles from './Button.module.css'; */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './Pages/About';
import Contact from './Pages/Contact';
import { NavLink } from 'react-router-dom';






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



function Car(props) {
  return (
    <>
    <h2> Mashina {props.brand}  svet   {props.color} !</h2>

    </>
  );
}

/* function App() {

const myhead = "head";
  return (
    <>
    <Header/>
     <Car brand="Audi" color="red"  />
     <Footer />

    </>
  );
} */


function Home() {

    const [mytext, setText] = useState("this text");
    const [mycolor, setColor] = useState("blue");
  const myclick=()=>{

    //setText("new text")
    //setColor("red")

    setText(prev=>prev==="this text"? "new text": "this text")
   setColor(prev => prev === "blue" ? "red" : "blue");
  
  }
  return (

<>
  
  <h1>Home Page</h1>
  <button
  type="button"
  onClick={myclick} className={mycolor}
>click</button>
<div>{mytext}</div>
</>

  )

}



/* function Contact() {
  return <h1>Contact Page</h1>;
} */

function App() {
  return (
    <>
     <Header />
    <BrowserRouter>
   
      {/* Navigation */}
<nav className="nav">
  <NavLink to="/" className={({ isActive }) => isActive ? "active" : "link"}>
    Home
  </NavLink>

  <span>|</span>

  <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "link"}>
    About
  </NavLink>

  <span>|</span>

  <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "link"}>
    Contact
  </NavLink>
</nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
         
    </BrowserRouter>
 <Footer/>

    </>
  );
}




export default App
