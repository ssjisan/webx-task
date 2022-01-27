import React, { useState } from "react";
import Invoice from "./Component/Invoice";
import Product from "./Component/Product";
import data from "../Assets/Product.json";
export default function Pos() {
  const [product, setProduct] = useState(data);
  const [order, setOrder] = useState([]);
  const handleAdd = (id) => {
    let newArray = [];
    let array = product.find((data) => data.id === +id);
    newArray.unshift(array,...order);
    setOrder(newArray);
  };
  const handleRemove=(index)=>{
    let newArray = order.filter((data,i)=> i !== +index);
    setOrder(newArray);
  }
console.log(order);
  return (
    <div class="px-4 mt-2">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="p-3 border bg-light">
            <Invoice order={order} handleRemove={handleRemove} />
          </div>
        </div>
        <div class="col-md-8">
          <div class="p-3 border bg-light">
            <Product product={product} handleAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}
