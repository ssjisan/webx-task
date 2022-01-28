import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import data from "../../Assets/Product.json";

export const DataContext = createContext();
export default function DataProcessing({ children }) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
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
  const handleOrder = () => {
    if (order.length <= 0) {
      swalWithBootstrapButtons.fire({
        icon: "info",
        title: "Sorry",
        text: "You dont choose anything for order",
        confirmButtonText: "Okay",
      });
    } else {
      setOrder([]);
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  return <DataContext.Provider value={{product, handleAdd,order, handleRemove, total,handleOrder}}>{children}</DataContext.Provider>;
}
