import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ countfav, favList  }) {
  const [spopup, SetSpopup] = useState(false);
  const [sicon, SetIcon] = useState(true);
 const  searchPopup=()=>{
SetSpopup(true)
SetIcon(false)
  }


  const closeSPopup=()=>{
    SetSpopup(false)
    SetIcon(true)

  }

  const[favPopup, setFavPopup]=useState(false)

  const showFavPopup=()=>{
 
     setFavPopup(prev=> !prev)
  
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <NavLink to="/" className="navbar-brand">
          Navbar
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>

          {/* favorites */}
          <div className="nav-fav">
           
           {favPopup &&(
           <div className="favlist">
            
            <h2>Favorites</h2>
           
              {favList.length === 0 ? (
      <p>No favorites</p>
    ) : (
      favList.map((item) => (
        <div key={item.id} className="fav-item">
          <p><span><img src={item.image} className="smallimg"/></span><span>{item.name}</span> <span>{item.price} ₼</span></p>
         
        </div>
      ))
    )}
           
           </div>

           )}
            
             <i className="fa-solid fa-heart" onClick={showFavPopup}></i>
          </div>
<span>{countfav}</span>
          {/* cart */}
          <div>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>

          {/* search */}
        
        {sicon && (
<div onClick={searchPopup}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

        )


        }
          

        </div>
      </div>

      {/* search popup */}
     {spopup &&(

<div className="search-box">
          <input type="text" />
          <button onClick={closeSPopup}>X</button>
        </div>

     )}
        
    
    </nav>
  );
}

export default Navbar;