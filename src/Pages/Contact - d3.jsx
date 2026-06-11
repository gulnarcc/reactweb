import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css'; 



/* function Contact() {

const [text,setText]=useState("")


    const handleSubmit=(e)=>{
       e.preventDefault();
        setText("daxil oldunuz")
    }
  return (
<>
<div>
     <h1>Contact Us</h1>
    </div>

    <form onSubmit={handleSubmit}>
        <p>{text}</p>
        <input type="text" placeholder='email'/>
         <input type="password" placeholder='password'/>
         <input type="submit" value="sign in"/>
    </form>
 
</>
  );
}

export default Contact */

function Contact() {
const[popup, SetPopup]=useState("none");
const navigate = useNavigate();

const hundleSubmit=(e)=>{
  e.preventDefault();
SetPopup("block");
}


const closePopup=()=>{
  SetPopup("none")

    setTimeout(() => {
      navigate("/");
    }, 500);

}
return(
<>
<form onSubmit={hundleSubmit}>
  <input type="text" placeholder='email'/>
  <input type="password" placeholder='password'/>
  <button type="submit">sign in</button>
</form>

<div className='popup' style={{display:popup}}>
<h2>Messaage send</h2>
  <button type="button"   onClick={closePopup}>close</button>
</div>




</>
);

}

export default Contact