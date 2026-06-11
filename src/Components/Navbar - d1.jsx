import { NavLink } from "react-router-dom";
import { useState } from "react";


function Navbar() {
 
  return(
<>


<nav className=  "navbar navbar-expand-lg ">
  <div className=  "container-fluid">
     <NavLink  to="/"   className=  "navbar-brand" >Navbar  </NavLink> 
    <button  className=  "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className=  "navbar-toggler-icon"></span>
    </button>
    <div className=  "collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=  "navbar-nav me-auto mb-2 mb-lg-0">
        <li className=  "nav-item">
           <NavLink   to="/about"  className=  "nav-link link"  >About  </NavLink> 
        </li>
        <li className=  "nav-item">
           <NavLink  to="/contact"    className=  "nav-link link" >Contact </NavLink> 
        </li>

      </ul>
      
   <div className="end" >

    <i className= "fa-solid fa-magnifying-glass"></i>

  </div>



    <div >

    
    
      <form className=  "d-flex" role="search">
        <input className=  "form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
        <button className=  "btn btn-outline-success" type="submit">Search</button>
      <div ><i className="fa-solid fa-xmark"></i>
    </div>
      </form>
</div>

    </div>
  </div>
</nav>

</>



  );
}





export default Navbar;

/* 



    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

        <div className="container">
      <NavLink   to="/" className="navbar-brand link">Home</NavLink>
      <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
      <NavLink   to="/about" className="navbar-brand link">About</NavLink>
      <NavLink  to="/contact" className="navbar-brand link">Contact</NavLink>
      <div className="end" onClick={searchpopup}><i className=  "fa-solid fa-magnifying-glass"></i></div>
    </div>
    
    </nav>

    <div style={{display:spopup}}>
    <input type="text"></input>
    <div onClick={searchlose}><i className="fa-solid fa-xmark"></i>
    </div>
    </div>

    </>
  );
}

 */