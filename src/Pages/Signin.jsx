import { useState } from "react";

function Signin() {
   const[spopup,SetSpopup]= useState(false)
   const hundle=(e)=>{
    e.preventDefault();
    SetSpopup(true)

  setTimeout(()=>{
      SetSpopup(false)
    }, 500)


   } 

  return (
    <>
    <div class="container">
  
    <h2>Вход или регистрация</h2>
    <form onSubmit={hundle}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1"></label>
  </div>
  <button type="submit" class="btn btn-primary">Вход</button>
</form>
{spopup && (
    <>
    <div className="popup">
    <h2>Welcome</h2>
    </div>
    </>
)}
</div>
    </>
  )
  
  
} 
export default Signin