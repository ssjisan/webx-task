import React, { useState, useEffect } from "react";
import Product from "./Component/Product";
import data from "../Assets/Product.json";
import Invoice from "./Component/Invoice/Invoice";
import Swal from "sweetalert2";
export default function Pos() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
    // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState(data);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const handleAdd = (id) => {
    let newArray = [];
    let array = product.find((data) => data.id === +id);
    newArray.unshift(array, ...order);
    setOrder(newArray);
  };
  const handleRemove = (index) => {
    let newArray = order.filter((data, i) => i !== +index);
    setOrder(newArray);
  };
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
      total = total + order[i].price;
    }
    setTotal(total);
  }, [order]);
  const handleOrder =()=>{
    if(order.length <= 0){
      swalWithBootstrapButtons.fire({
        icon: 'info',
        title: 'Sorry',
        text: 'You dont choose anything for order',
        confirmButtonText:"Okay"
      })
    }
    else{
      setOrder([])
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
  return (
    <div class="px-4 mt-2">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="p-3 border bg-light">
            <Invoice order={order} total={total} handleRemove={handleRemove} handleOrder={handleOrder}/>
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-6">
          <div class="p-3 border bg-light">
            <Product product={product} handleAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}
