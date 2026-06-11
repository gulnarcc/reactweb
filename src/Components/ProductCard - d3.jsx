import { useState } from "react";
import '../App.css'

function ProductCard({ product, setCountfav, setFavList}){

const[fav,setFav]=useState("grey")

/* const favList=()=>{


  setFav( fav=== "grey" ? "red" : "grey");
setCountfav(prev => prev + 1);


} */

const favList = () => {
  const isAdding = fav === "grey";

  setFav(isAdding ? "red" : "grey");

  setCountfav(prev => prev + (isAdding ? 1 : -1));


 setFavList(prev => {
    if (isAdding) {
      return [...prev, product]; // əlavə et
    } else {
      return prev.filter(item => item.id !== product.id); // sil
    }
  });


};




return(
<>

<div className="col-12 col-sm-6 col-md-4 col-lg-2 animate__animated ">
<div className="card h-100">
<a href="#">
<img src={product.image} className="card-img-top" loading="lazy" alt="lemon-pie" />
</a>
<div className="card-body"><h3 className="card-title">{product.name}</h3>
<h4 className="card-text" data-name="8,99"> {product.price} ₼</h4>

<div onClick={favList}><i className={`fa-solid fa-heart ${fav}`} ></i></div>


 <button type="button" className="btn btn-brown btn-sm  tocart  ">cart <i className="fa-solid fa-cart-arrow-down"></i></button>
  
</div>
</div>
</div>
</>
);
}

export default ProductCard