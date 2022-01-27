import React, { useState,useEffect } from "react";
import Invoice from "./Component/Invoice";
import Product from "./Component/Product";
import data from "../Assets/Product.json";
export default function Pos() {
  const [product, setProduct] = useState(data);
    const [order, setOrder] = useState([]);
    const [total,setTotal]=useState(0)
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
  useEffect(()=>{
    let total = 0;
    for(let i=0; i< order.length; i++){
      total = total + order[i].price
    }
    setTotal(total)
  },[order])

  return (
    <div class="px-4 mt-2">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="p-3 border bg-light">
                      <Invoice order={order} total={total} handleRemove={handleRemove} />
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
