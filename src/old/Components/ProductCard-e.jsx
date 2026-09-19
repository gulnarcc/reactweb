
import { useState } from "react";

function ProductCard({ product, addToCart, addToList,removeFromList }) {

const [liked, setLiked] = useState(false); 

  const toggleLike = () => {
  setLiked(!liked);
};

  
const [buyed, setb] = useState(false); 
/*  const toggleb = () => {
  setb(!buyed);
}; */


const handleCart = () => {
  addToCart(product);
    setb(true);
};
const handleList = () => {
   if (liked) {
    removeFromList(product.id);
    setLiked(false);
  } else {
    addToList(product);
    setLiked(true);
  }
};

  return (

<div className="col-12 col-sm-6 col-md-4 col-lg-2 animate__animated ">
<div className="card h-100">
<a href="#">
<img src={product.image} className="card-img-top" loading="lazy" alt="lemon-pie"/>
</a>
<div className="card-body"><h3 className="card-title">{product.name}</h3>
<h4 className="card-text" data-name="8,99"> {product.price} ₼</h4>
<div onClick={handleList}>
  <i
    className={`fa-solid fa-heart myi heart ${
      liked ? "active" : ""
    }`}
  ></i>
</div>
<button
  type="button"
  onClick={handleCart}
  className="btn btn-brown btn-sm tocart"
>
  
cart <i 

className={`fa-solid fa-cart-arrow-down cart ${buyed ? "active": "" }`} 


></i></button>
  
</div>
</div>
</div>
  );
}

export default ProductCard;