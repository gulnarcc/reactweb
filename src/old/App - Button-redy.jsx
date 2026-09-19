
import './App.css'
import './style.css'
import styles from './Button.module.css';

import { useState } from 'react';



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


function App() {
const [color,setColor]=useState("red")
const [text, setText ]=useState("")
const [count, setCount] = useState(0)

const shoot=()=>{
  
  

  let newCount = count + 1

  if (newCount > 10) {
    newCount = 0
  }

  setCount(newCount)

/* alert("text") */

setText("Hello"+newCount)

}


const mycolor=()=>{



   setColor(color === "red" ? "blue" : "red")

}



  return (
    <>
      <p style={{fontSize:'20px'}}>Type in the input field:{text}</p>
<button type="button" onClick={shoot}>{color}</button>

<button type="button" onClick={mycolor} className={color}>{color}</button>



    </>

  );
}





export default App
