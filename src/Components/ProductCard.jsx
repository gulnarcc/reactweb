import { useState } from "react";
import '../App.css'; 

function ProductCard({ product ,favorites, setFavorites, cartlist, setCartlist }){

/* const [liked,SetLiked]=useState("grey")

const funcliked=()=>{
SetLiked("red")
} */


const [liked,SetLiked]=useState(false)

const funcliked = () => {

   if (!liked) {

    setFavorites([...favorites, product]);

  } else {

    setFavorites(
      favorites.filter(item => item.id !== product.id)
    );

  }  


   SetLiked(!liked); 
}



const [cart,setCart]=useState(false)

const funccart = () => {

   if (!cart) {

    setCartlist([...cartlist, product]);

  } /* else {

    setCartlist(
      cartlist.filter(item => item.id !== product.id)
    );

  }   */


   setCart(!cart); 
}

return(
  <>
<div className="col-12 col-sm-6 col-md-4 col-lg-2 animate__animated ">
<div className="card h-100">
<a href="#">
<img src={product.image} className="card-img-top" loading="lazy" alt="lemon-pie" />
</a>
<div className="card-body"><h3 className="card-title">{product.name}</h3>
<h4 className="card-text" data-name="8,99"> {product.price} ₼</h4>

<button type="button" className="cbutton" onClick={funcliked}><i className={`fa-solid fa-heart  ${(liked)? "red":"grey" }`} ></i>   </button>

<button type="button" className="cbutton"   onClick={funccart}><span className={`${(cart)? "greenc":"grey" }`}>cart <i className="fa-solid fa-cart-arrow-down "></i></span></button>

</div>
</div>
</div>
  </>
)

}

export default ProductCard;