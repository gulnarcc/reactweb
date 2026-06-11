
import './App.css'
import './style.css'
/* import styles from './Button.module.css'; */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './Pages/About';






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
  return <h1>Home Page</h1>;
}



function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
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
