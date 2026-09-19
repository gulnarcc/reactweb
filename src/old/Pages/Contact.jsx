import { useState } from 'react';
/* import { useNavigate } from "react-router-dom"; */
import '../App.css'; 
import { useNavigate } from "react-router-dom";





function Contact() {
/* const[popup, SetPopup]=useState("none");
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

} */


/* const [message, setMessage]=useState("")

const openMessage=()=>{
setMessage("Sign in")
} */


const [spopup, SetSpopup] = useState(false);
/* const [animated, Setanimated] = useState(false); */
const navigate = useNavigate();


const hundleSubmit=(e)=>{
  e.preventDefault();
    SetSpopup(true)



     setTimeout(()=>{
    /*   Setanimated(true) */
      navigate("/")
    }, 1000) 
}


const closesPopup=()=>{
  SetSpopup(false)


}

return(
<>
{/* <form onSubmit={hundleSubmit}>
  <input type="text" placeholder='email'/>
  <input type="password" placeholder='password'/>
  <button type="submit">sign in</button>
</form>

<div className='popup' style={{display:popup}}>
<h2>Messaage send</h2>
  <button type="button"   onClick={closePopup}>close</button>
</div>



  }

 */}




<div class="container">

<form  onSubmit={hundleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" /* onClick={openPopup} */ class="btn btn-primary" >Submit</button>
</form>
{spopup && (
  <>
  <div className="message  animate__animated  animate__bounceOut">
  <h2>You are signed </h2>
  <button onClick={closesPopup}>Close</button>
  </div>
  </>
)}
</div>
</>
);

}

export default Contact