import React from "react";

export default function Product({product,handleAdd}) {
  return (
      <div class="px-4 mt-2">
        <div class="row g-4">
          {product.map((data)=><div class="col-md-2 col-sm-3" style={{cursor:"pointer"}}>
              <div class="p-2 card" onClick={()=>handleAdd(data.id)}>
                  <img src={data.imgUrl} class="card-img-top" alt={data.productName} />
                  <p class="card-text">{data.productName}</p>
            </div>
          </div>)}
        </div>
      </div>
  );
}
