import { useState } from "react";
import { NavLink } from "react-router-dom";

function Products() {




  return (
    <>
    <div className="container">
<h2>Каталог</h2>

 <div className="card-group">



  <div className="card">
    <img src="./images/phone1.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"><NavLink to="/shop">Смартфоны   </NavLink>
</h5>
    </div>
  </div>
 
  <div className="card">
    <img src="./images/computer.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ноутбуки</h5>
    </div>
  </div>
    <div className="card">
    <img src="./images/tv.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Тв,аудио</h5>
    </div>
  </div>
    <div className="card">
    <img src="./images/posuda.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Посуда</h5>
    </div>
  </div>
    <div className="card">
    <img src="./images/smart.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Гаджеты</h5>
    </div>
  </div>
</div>
</div>
    </>
  )
  
  
} 
export default Products