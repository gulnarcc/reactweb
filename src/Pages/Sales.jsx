import { useState } from "react";

function Sales() {




  return (
    <>
    <div className="container">
    <div className="card-group cardss">
  <div className="card">
    <img src="./images/s1.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Предложение твоей мечты</h5>
      <p className="card-text"><span className="srok1"> До конца осталось </span> <span className="srok2">3 дня</span></p>
    </div>
  </div>

  <div className="card">
    <img src="./images/s2.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Принеси старый,забери новый</h5>
      <p className="card-text"><span className="srok1"> До конца осталось </span> <span className="srok2">3 дня</span></p>
    </div>
  </div>



    <div className="card">
    <img src="./images/s3.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">NVIDIA 007 FIRST LIGHT
</h5>
      <p className="card-text"><span className="srok1"> До конца осталось </span> <span className="srok2">3 дня</span></p>
    </div>
  </div>
</div>
 </div>
    </>
  );
  
  
} 
export default Sales;