import { useState } from 'react';
import '../App.css'; 

function Sign() {
    const[mtext, SetMtext ]=useState("")

let fmessage = (e) =>{

    e.preventDefault();

    return(
SetMtext("Daxil oldunuz")
    );
}
  return (
    <>
      <h2 className="text-center">Sign in</h2>
<p>{mtext}</p>
     <form onSubmit={fmessage}>
        <input type="text" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <input type="submit" value="sign in"/>

     </form>
     
    </>
  );
}

export default Sign;